// 테스트 진행 상태 관리
let currentQuestionIndex = 0;
let answers = [];

// 테스트 시작
function startTest() {
  // 세션 스토리지 초기화
  sessionStorage.setItem("currentQuestionIndex", "0");
  sessionStorage.setItem("answers", JSON.stringify([]));
  window.location.href = "test.html";
}

// 테스트 페이지 초기화
function initTestPage() {
  // 세션 스토리지에서 상태 복원
  const savedIndex = sessionStorage.getItem("currentQuestionIndex");
  const savedAnswers = sessionStorage.getItem("answers");

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
  document.getElementById("questionNumber").textContent = `질문 ${
    currentQuestionIndex + 1
  } / ${questions.length}`;
  document.getElementById("questionText").textContent = question.question;
  document.getElementById("optionAText").textContent = question.optionA.text;
  document.getElementById("optionBText").textContent = question.optionB.text;

  // 진행률 업데이트
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  document.getElementById("progressFill").style.width = progress + "%";
}

// 선택지 선택
function selectOption(option) {
  const question = questions[currentQuestionIndex];
  const selectedValue =
    option === "A" ? question.optionA.value : question.optionB.value;

  // 답변 저장
  answers.push(selectedValue);
  sessionStorage.setItem("answers", JSON.stringify(answers));

  // 다음 질문으로
  currentQuestionIndex++;
  sessionStorage.setItem(
    "currentQuestionIndex",
    currentQuestionIndex.toString()
  );

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
  const userType = answers.join("");

  // 결과를 세션 스토리지에 저장
  sessionStorage.setItem("userType", userType);

  // 결과 페이지로 이동
  window.location.href = "result.html";
}

// 결과 페이지 초기화
function initResultPage() {
  const userType = sessionStorage.getItem("userType");

  if (!userType) {
    // 결과가 없으면 처음부터 다시
    window.location.href = "index.html";
    return;
  }

  // 유형 표시
  document.getElementById("typeBadge").textContent = userType;

  // 유형 제목/설명 표시
  const title = typeDetails?.[userType]?.title || "연애 유형 결과";
  const description =
    typeDetails?.[userType]?.desc || "당신의 연애 유형을 분석했습니다.";
  const titleEl = document.getElementById("typeTitle");
  if (titleEl) titleEl.textContent = title;
  document.getElementById("typeDescription").textContent = description;

  // 인물 매칭
  matchCharacters(userType);
}

// 인물 매칭 로직
function matchCharacters(userType) {
  const matching = typeMatching[userType];
  if (!matching) {
    // 매칭 정보가 없으면 기본 처리
    displayNoCharacter("matchingCharacter");
    displayNoCharacter("similarCharacter");
    displayNoCharacter("notMatchingCharacter");
    return;
  }

  // 어울리는 인물: 잘 맞는 유형의 인물들
  const wellMatchedCharacters = characters.filter(
    (char) => char.type === matching.wellMatched
  );
  if (wellMatchedCharacters.length > 0) {
    const randomIndex = Math.floor(
      Math.random() * wellMatchedCharacters.length
    );
    displayCharacter("matchingCharacter", wellMatchedCharacters[randomIndex]);
  } else {
    displayNoCharacter("matchingCharacter");
  }

  // 유사한 인물: 같은 유형의 인물들
  const sameTypeCharacters = characters.filter(
    (char) => char.type === userType
  );
  if (sameTypeCharacters.length > 0) {
    const randomIndex = Math.floor(Math.random() * sameTypeCharacters.length);
    displayCharacter("similarCharacter", sameTypeCharacters[randomIndex]);
  } else {
    displayNoCharacter("similarCharacter");
  }

  // 안 어울리는 인물: 안 맞는 유형의 인물들
  const notMatchedCharacters = characters.filter(
    (char) => char.type === matching.notMatched
  );
  if (notMatchedCharacters.length > 0) {
    const randomIndex = Math.floor(Math.random() * notMatchedCharacters.length);
    displayCharacter("notMatchingCharacter", notMatchedCharacters[randomIndex]);
  } else {
    displayNoCharacter("notMatchingCharacter");
  }
}

// 인물 정보 표시
function displayCharacter(elementId, character) {
  const element = document.getElementById(elementId);
  element.innerHTML = `
        <img src="${character.imageUrl}" alt="${character.name}" class="character-image">
        <div class="character-name">${character.name} <span class="character-work">(${character.work})</span></div>
        <div class="character-type">${character.type}</div>
        <div class="character-description">${character.description}</div>
    `;
}

// 인물 없음 표시
function displayNoCharacter(elementId) {
  const element = document.getElementById(elementId);
  element.innerHTML = `
        <div class="no-character">인물이 없음</div>
    `;
}

// 테스트 다시 시작
function restartTest() {
  sessionStorage.clear();
  window.location.href = "index.html";
}
