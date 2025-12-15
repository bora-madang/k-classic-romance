// 질문 데이터
const questions = [
  {
    dimension: "E/I",
    question:
      "어떤 사람을 처음 본 순간, 그 사람이 가진 특별한 매력에 강렬하게 매료되어 깊이 반해버렸습니다. 이때, 당신의 벅찬 감정이나 심정을 가장 잘 나타내는 행동 혹은 내면의 표현은 무엇인가요?",
    optionA: {
      text: "네가 만물마다 주인이 있다는 이치를 모르는구나. 형산의 흰 옥이나 여수의 황금도 그것을 얻을 주인이 각각 있는 법이다. 잔말 말고 불러오너라.",
      value: "E",
    },
    optionB: {
      text: "따뜻한 날 맑은 강에 원앙은 짝을 찾고 푸른 하늘에 구름이 걷히자 비취새가 노니 누나.",
      value: "I",
    },
  },
  {
    dimension: "F/T",
    question:
      "집안끼리 맺어준 이성이 당신에게 짧은 만남 후 고백했을 때, 당신의 반응은 무엇인가요?",
    optionA: {
      text: "인연이 이미 정해졌으니 당신을 모시고 집으로 돌아가려 합니다.",
      value: "F",
    },
    optionB: {
      text: "한 번 정이 깊이 든 연후에 혹시나 저를 버리시면, 일편단심 이 마음은 홀로 외로운 방에서 밤을 새우며 우는 신세가 될 것입니다. 저 아니면 누가 저를 돌보겠습니까? 그런 분부는 마옵소서.",
      value: "T",
    },
  },
  {
    dimension: "D/A",
    question:
      "오랫동안 사귄 연인이 갑작스러운 지방 이직으로 멀리 떨어져야 합니다. 이 상황에서 당신의 마음가짐과 행동은 무엇인가요?",
    optionA: {
      text: "그 사람은 나의 천생배필임에 반드시 찾으려 하노라.",
      value: "D",
    },
    optionB: {
      text: "세상일이 뜻대로 되지 않아, 즐거움이 다하기도 전에 슬프게 헤어져야만 하겠어요.",
      value: "A",
    },
  },
  {
    dimension: "O/S",
    question:
      "가장 사랑했던 사람을 잃은 후 시간이 흘렀습니다. 매력적인 새로운 이성을 만났을 때, 당신의 반응은?",
    optionA: {
      text: "나는 그 뒤에 다시 사랑에 빠지지 않았다.",
      value: "O",
    },
    optionB: {
      text: "당신과 나는 하늘이 정한 연분입니다. 저와 동침함이 어떠합니까?",
      value: "S",
    },
  },
];

// 16가지 유형 해석 데이터
const typeDetails = {
  EFDO: {
    title: "연애 유형: 열정돌파형 - 감정으로 밀어붙이는 사랑",
    desc: "강한 감정과 행동력으로 관계를 이끌어가는 타입입니다. 상대에 대한 애정이 분명하고, 그것을 숨기지 않습니다. 문제가 생기면 직접 부딪혀 해결하려 하며, 관계를 우선순위에 둡니다. 다만 감정의 속도가 빨라 상대가 따라오기 어려울 수 있고, 갈등이 격해질 가능성도 있습니다.",
  },
  EFDS: {
    title: "연애 유형: 일편단심형 - 변함없이 지켜내는 사랑",
    desc: "확고한 애정과 의지로 관계를 끝까지 지켜내는 타입입니다. 상대방을 향한 감정을 숨기지 않고 꾸준히 표현하며, 외부의 방해나 어려움이 있어도 쉽게 흔들리지 않습니다. 갈등이 생겨도 물러서기보다는 관계를 지키는 선택을 하며, 사랑을 삶의 중요한 중심 가치로 둡니다. 다만 단호함이 강할수록 상대에게는 부담이나 압박으로 느껴질 수 있습니다.",
  },
  EFAS: {
    title: "연애 유형: 감정회피형 - 다가가지만 상처는 피하는 사랑",
    desc: "감정 표현은 솔직하지만, 갈등 앞에서는 한발 물러나는 타입입니다. 상대에게 호감과 애정을 숨기지 않지만, 관계가 위태로워질 조짐이 보이면 직접 맞서기보다는 거리를 둡니다. 감정 소모를 최소화하려는 경향이 강하며, 사랑을 원하면서도 상처받지 않기 위한 회피를 반복할 수 있습니다.",
  },
  EFAO: {
    title: "연애 유형: 시적 우회형 - 시와 낭만으로 표현하는 사랑",
    desc: "직접적인 말보다 분위기와 감성으로 사랑을 전하는 타입입니다. 상대에 대한 호감과 애정을 은유적 표현이나 정서적인 행동으로 드러내며, 관계를 하나의 이야기처럼 만들어갑니다. 갈등 상황에서도 정면으로 맞서기보다는 우회적인 방식으로 감정을 풀어내 관계를 유지하려 합니다. 다만 진심이 명확히 전달되지 않아 답답함을 줄 수 있습니다.",
  },
  ETDO: {
    title: "연애 유형: 주도결단형 - 판단과 실행으로 완성하는 관계",
    desc: "사랑에서도 주도권과 명확한 결정을 중시하는 타입입니다. 감정보다는 상황 판단과 현실적 선택을 앞세워 관계를 이끌어갑니다. 갈등을 미루지 않고 빠르게 정리하려 하며, 관계의 방향성을 분명히 제시합니다. 다만 상대의 감정을 충분히 고려하지 못한다는 인상을 줄 수 있습니다.",
  },
  ETDS: {
    title: "연애 유형: 지혜로운 인내형 - 신중하게 조언하고 기다리는 사랑",
    desc: "감정보다는 판단과 통찰을 바탕으로 관계를 이끄는 타입입니다. 상대의 선택과 성장을 존중하며, 서두르지 않고 조언과 기다림으로 관계를 지켜봅니다. 갈등이 생겨도 감정적으로 휘둘리지 않고 차분하게 대응하며, 장기적인 안정을 중요하게 여깁니다. 다만 감정 표현이 적어 차갑게 보일 수 있습니다.",
  },
  ETAS: {
    title: "연애 유형: 거리통제형 - 감정을 드러내되 선은 지키는 관계",
    desc: "표현은 하지만, 갈등에 깊이 개입하지 않는 타입입니다. 자신의 생각과 감정을 분명히 말하지만, 관계가 복잡해질 가능성이 있으면 한발 물러서 상황을 정리합니다. 감정보다는 판단을 중시하며, 관계를 스스로 통제 가능한 범위 안에 두려는 경향이 있습니다.",
  },
  ETAO: {
    title: "연애 유형: 조건관리형 - 기준을 세워 관계를 유지하는 사랑",
    desc: "감정보다는 조건과 합의를 통해 관계를 이어가는 타입입니다. 관계에서 무엇이 가능한지, 어디까지 허용할 수 있는지를 명확히 하며 그 선 안에서 안정적인 관계를 유지하려 합니다. 갈등을 감정적으로 확대하지 않고 조정하려는 능력이 있지만, 상대에게는 차갑게 느껴질 수 있습니다.",
  },
  IFDO: {
    title: "연애 유형: 내면집착형 - 말없이 깊어지는 사랑",
    desc: "겉으로 드러내지 않지만, 감정은 쉽게 사라지지 않는 타입입니다. 감정을 표현하는 데는 서툴지만, 한 번 마음을 주면 쉽게 정리하지 못합니다. 갈등 상황에서는 직접 나서기보다 스스로 감당하며, 관계를 놓지 않으려는 집착이 내면에서 오래 지속됩니다.",
  },
  IFDS: {
    title: "연애 유형: 침묵헌신형 - 말없이 감당하며 지켜내는 사랑",
    desc: "겉으로는 담담하지만, 관계를 위해 스스로를 희생하며 끝까지 버티는 타입입니다. 상대에 대한 감정을 직접적으로 드러내기보다는 마음속에 깊이 간직한 채 행동으로 책임을 다하는 사랑을 합니다. 갈등이 생겨도 맞서기보다는 스스로 감정을 눌러 참으며 관계가 유지되기를 선택합니다. 사랑 앞에서 자신의 욕구를 뒤로 미루는 경향이 강해, 헌신이 누적될수록 내면의 피로가 쌓일 수 있습니다.",
  },
  IFAS: {
    title: "연애 유형: 체념헌신형 - 사랑을 위해 한 발 물러서는 선택",
    desc: "관계를 소중히 여기지만, 충돌을 피하기 위해 스스로 물러나는 타입입니다. 상대와의 관계를 유지하는 것이 중요하지만, 갈등 상황에서는 자신의 감정이나 입장을 적극적으로 주장하지 않습니다. 사랑을 지키기 위해 양보와 포기를 반복하며, 결국 스스로를 낮추는 방식으로 관계를 이어갑니다. 조용하지만 깊은 애정을 지니며, 상처를 혼자 감내하는 경우가 많습니다.",
  },
  IFAO: {
    title: "연애 유형: 조용지속형 - 말없이 이어가는 안정적 사랑",
    desc: "크게 드러내지 않아도 관계를 꾸준히 이어가는 타입입니다. 감정을 표현하는 방식은 절제되어 있지만, 관계 자체를 소중히 여깁니다. 갈등이 생기면 무리하게 해결하려 하기보다는 상황이 가라앉기를 기다리며 관계를 유지하려 합니다. 안정적이지만 다소 답답하게 느껴질 수 있습니다.",
  },
  ITDO: {
    title: "연애 유형: 거리조절형 - 스스로를 지키며 선택하는 사랑",
    desc: "관계보다 자신의 기준과 안정감을 우선하는 타입입니다. 사랑에 휘둘리기보다는 한 발 떨어진 위치에서 상황을 판단합니다. 감정을 드러내는 데 조심스럽고, 갈등이 발생하면 관계를 유지할지 스스로를 지킬지 빠르게 결정합니다. 관계에 깊이 빠지기까지 시간이 걸리지만, 일단 선택하면 쉽게 번복하지는 않습니다.",
  },
  ITDS: {
    title: "연애 유형: 신념수호형 - 원칙 위에서 선택하는 사랑",
    desc: "감정보다 신념과 기준에 따라 관계를 판단하는 타입입니다. 사랑을 가볍게 여기지 않으며, 관계 역시 명확한 기준과 책임 위에 있어야 한다고 생각합니다. 감정을 겉으로 드러내지는 않지만, 한 번 선택한 관계에는 쉽게 흔들리지 않습니다. 갈등이 생기면 회피하지 않고 원칙에 따라 정면으로 대응합니다.",
  },
  ITAS: {
    title: "연애 유형: 수동회피형 - 감정에 흔들리는 사랑",
    desc: "감정을 드러내지 못한 채 갈등을 피해 관계를 이어가려는 타입입니다. 사랑을 가볍게 여기지는 않지만, 충돌 상황에서는 적극적으로 나서기보다 상황에 밀려 물러나는 선택을 합니다. 감정의 방향이 명확하지 않아 관계의 주도권을 잃기 쉬우며, 내면의 불안이 쌓일 수 있습니다. 스스로의 감정을 인식하고 표현하는 연습이 필요합니다.",
  },
  ITAO: {
    title: "연애 유형: 기준유지형 - 흔들리지 않는 선 위의 관계",
    desc: "관계보다 자신의 기준과 질서를 우선하는 타입입니다. 감정을 앞세우기보다는 스스로 정한 원칙 안에서 관계를 판단합니다. 갈등 상황에서도 감정적으로 휘둘리지 않으며, 관계를 유지하더라도 자신의 기준을 넘어서지는 않습니다. 안정적이지만 거리감이 느껴질 수 있습니다.",
  },
};

// 유형별 매칭 정보
const typeMatching = {
  EFDO: { wellMatched: "IFDO", notMatched: "ETAO" },
  EFDS: { wellMatched: "IFDS", notMatched: "ETAS" },
  EFAS: { wellMatched: "IFAS", notMatched: "ETDS" },
  EFAO: { wellMatched: "IFAO", notMatched: "ETDO" },
  ETDO: { wellMatched: "ITDO", notMatched: "EFAO" },
  ETDS: { wellMatched: "ITDS", notMatched: "EFAS" },
  ETAS: { wellMatched: "ITAS", notMatched: "EFDS" },
  ETAO: { wellMatched: "ITAO", notMatched: "EFDO" },
  IFDO: { wellMatched: "EFDO", notMatched: "ETAO" },
  IFDS: { wellMatched: "EFDS", notMatched: "ETAS" },
  IFAS: { wellMatched: "EFAS", notMatched: "ETDS" },
  IFAO: { wellMatched: "EFAO", notMatched: "ETDO" },
  ITDO: { wellMatched: "ETDO", notMatched: "EFAO" },
  ITDS: { wellMatched: "ETDS", notMatched: "EFAS" },
  ITAS: { wellMatched: "ETAS", notMatched: "EFDS" },
  ITAO: { wellMatched: "ETAO", notMatched: "EFDO" },
};

// 고전 소설 인물 데이터
const characters = [
  {
    name: "여인",
    type: "EFDO",
    work: "만복사저포기",
    description: typeDetails.EFDO.desc,
    imageUrl: "assets/여인.png",
  },
  {
    name: "계섬월",
    type: "EFDO",
    work: "구운몽",
    description: typeDetails.EFDO.desc,
    imageUrl: "assets/계섬월.png",
  },
  {
    name: "가춘운",
    type: "EFDO",
    work: "구운몽",
    description: typeDetails.EFDO.desc,
    imageUrl: "assets/가춘운.png",
  },
  {
    name: "춘향",
    type: "EFDS",
    work: "춘향전",
    description: typeDetails.EFDS.desc,
    imageUrl: "assets/춘향.png",
  },
  {
    name: "이몽룡",
    type: "EFDS",
    work: "춘향전",
    description: typeDetails.EFDS.desc,
    imageUrl: "assets/이몽룡.png",
  },
  {
    name: "이선",
    type: "EFDS",
    work: "숙향전",
    description: typeDetails.EFDS.desc,
    imageUrl: "assets/이선.png",
  },
  {
    name: "양소유",
    type: "EFDS",
    work: "구운몽",
    description: typeDetails.EFDS.desc,
    imageUrl: "assets/양소유.png",
  },
  {
    name: "양생",
    type: "EFAO",
    work: "만복사저포기",
    description: typeDetails.EFAO.desc,
    imageUrl: "assets/양생.png",
  },
  {
    name: "적경홍",
    type: "ETDO",
    work: "구운몽",
    description: typeDetails.ETDO.desc,
    imageUrl: "assets/적경홍.png",
  },
  {
    name: "정경패",
    type: "ETDO",
    work: "구운몽",
    description: typeDetails.ETDO.desc,
    imageUrl: "assets/정경패.png",
  },
  {
    name: "사씨",
    type: "ETDS",
    work: "사씨남정기",
    description: typeDetails.ETDS.desc,
    imageUrl: "assets/사씨.png",
  },
  {
    name: "최랑",
    type: "IFDS",
    work: "이생규장전",
    description: typeDetails.IFDS.desc,
    imageUrl: "assets/최랑.png",
  },
  {
    name: "이생",
    type: "IFAS",
    work: "이생규장전",
    description: typeDetails.IFAS.desc,
    imageUrl: "assets/이생.png",
  },
  {
    name: "숙향",
    type: "IFAS",
    work: "숙향전",
    description: typeDetails.IFAS.desc,
    imageUrl: "assets/숙향.png",
  },
  {
    name: "운영",
    type: "IFAS",
    work: "운영전",
    description: typeDetails.IFAS.desc,
    imageUrl: "assets/운영.png",
  },
  {
    name: "김진사",
    type: "IFAS",
    work: "운영전",
    description: typeDetails.IFAS.desc,
    imageUrl: "assets/김진사.png",
  },
  {
    name: "백능파",
    type: "ITDO",
    work: "구운몽",
    description: typeDetails.ITDO.desc,
    imageUrl: "assets/백능파.png",
  },
  {
    name: "이소화",
    type: "ITDO",
    work: "구운몽",
    description: typeDetails.ITDO.desc,
    imageUrl: "assets/이소화.png",
  },
  {
    name: "심요연",
    type: "ITDO",
    work: "구운몽",
    description: typeDetails.ITDO.desc,
    imageUrl: "assets/심요연.png",
  },
  {
    name: "진채봉",
    type: "ITDS",
    work: "구운몽",
    description: typeDetails.ITDS.desc,
    imageUrl: "assets/진채봉.png",
  },
  {
    name: "유한림",
    type: "ITAS",
    work: "사씨남정기",
    description: typeDetails.ITAS.desc,
    imageUrl: "assets/유한림.png",
  },
];
