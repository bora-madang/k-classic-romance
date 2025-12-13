// 테스트 진행 상태 관리
let currentQuestionIndex = 0;
let answers = [];

// 테스트 시작
function startTest() {
    // 세션 스토리지 초기화
    sessionStorage.setItem('currentQuestionIndex', '0');
    sessionStorage.setItem('answers', JSON.stringify([]));
    window.location.href = 'test.html';
}

// 테스트 페이지 초기화
function initTestPage() {
    // 세션 스토리지에서 상태 복원
    const savedIndex = sessionStorage.getItem('currentQuestionIndex');
    const savedAnswers = sessionStorage.getItem('answers');
    
    if (savedIndex !== null) {
        currentQuestionIndex = parseInt(savedIndex);
    }
    
    if (savedAnswers) {
        answers = JSON.parse(savedAnswers);
    }
    
    loadQuestion();
}

// 질문 로드
function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        // 모든 질문 완료 - 결과 페이지로 이동
        calculateResult();
        return;
    }
    
    const question = questions[currentQuestionIndex];
    
    // UI 업데이트
    document.getElementById('questionNumber').textContent = `질문 ${currentQuestionIndex + 1} / ${questions.length}`;
    document.getElementById('questionText').textContent = question.question;
    document.getElementById('dimensionBadge').textContent = question.dimension;
    document.getElementById('optionAText').textContent = question.optionA.text;
    document.getElementById('optionBText').textContent = question.optionB.text;
    
    // 진행률 업데이트
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
}

// 선택지 선택
function selectOption(option) {
    const question = questions[currentQuestionIndex];
    const selectedValue = option === 'A' ? question.optionA.value : question.optionB.value;
    
    // 답변 저장
    answers.push(selectedValue);
    sessionStorage.setItem('answers', JSON.stringify(answers));
    
    // 다음 질문으로
    currentQuestionIndex++;
    sessionStorage.setItem('currentQuestionIndex', currentQuestionIndex.toString());
    
    // 다음 질문 로드 또는 결과 페이지로 이동
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        calculateResult();
    }
}

// 결과 계산
function calculateResult() {
    if (answers.length !== 4) {
        // 답변이 완전하지 않으면 처음부터 다시
        startTest();
        return;
    }
    
    // 유형 조합 생성 (E/I, F/T, D/A, O/S 순서)
    const userType = answers.join('');
    
    // 결과를 세션 스토리지에 저장
    sessionStorage.setItem('userType', userType);
    
    // 결과 페이지로 이동
    window.location.href = 'result.html';
}

// 결과 페이지 초기화
function initResultPage() {
    const userType = sessionStorage.getItem('userType');
    
    if (!userType) {
        // 결과가 없으면 처음부터 다시
        window.location.href = 'index.html';
        return;
    }
    
    // 유형 표시
    document.getElementById('typeBadge').textContent = userType;
    
    // 유형 설명 표시
    const description = typeDescriptions[userType] || '당신의 연애 유형을 분석했습니다.';
    document.getElementById('typeDescription').textContent = description;
    
    // 인물 매칭
    matchCharacters(userType);
}

// 인물 매칭 로직
function matchCharacters(userType) {
    // 유사도 계산 함수
    function calculateSimilarity(type1, type2) {
        let similarity = 0;
        for (let i = 0; i < 4; i++) {
            if (type1[i] === type2[i]) {
                similarity++;
            }
        }
        return similarity;
    }
    
    // 모든 인물과의 유사도 계산
    const characterScores = characters.map(char => ({
        character: char,
        similarity: calculateSimilarity(userType, char.type)
    }));
    
    // 유사도 순으로 정렬
    characterScores.sort((a, b) => b.similarity - a.similarity);
    
    // 어울리는 인물: 유사도 3 이상 중 랜덤 또는 첫 번째
    const matchingCharacters = characterScores.filter(c => c.similarity >= 3);
    const matchingChar = matchingCharacters.length > 0 
        ? matchingCharacters[Math.floor(Math.random() * matchingCharacters.length)].character
        : characterScores[0].character;
    
    // 유사한 인물: 유사도 2 이상 중 랜덤 또는 두 번째
    const similarCharacters = characterScores.filter(c => c.similarity >= 2 && c.character.name !== matchingChar.name);
    const similarChar = similarCharacters.length > 0
        ? similarCharacters[Math.floor(Math.random() * similarCharacters.length)].character
        : characterScores[1]?.character || characterScores[0].character;
    
    // 안 어울리는 인물: 유사도 0-1 중 랜덤 또는 마지막
    const notMatchingCharacters = characterScores.filter(c => c.similarity <= 1);
    const notMatchingChar = notMatchingCharacters.length > 0
        ? notMatchingCharacters[Math.floor(Math.random() * notMatchingCharacters.length)].character
        : characterScores[characterScores.length - 1].character;
    
    // 인물 정보 표시
    displayCharacter('matchingCharacter', matchingChar);
    displayCharacter('similarCharacter', similarChar);
    displayCharacter('notMatchingCharacter', notMatchingChar);
}

// 인물 정보 표시
function displayCharacter(elementId, character) {
    const element = document.getElementById(elementId);
    element.innerHTML = `
        <img src="${character.imageUrl}" alt="${character.name}" class="character-image">
        <div class="character-name">${character.name}</div>
        <div class="character-type">${character.type}</div>
        <div class="character-description">${character.description}</div>
    `;
}

// 테스트 다시 시작
function restartTest() {
    sessionStorage.clear();
    window.location.href = 'index.html';
}

