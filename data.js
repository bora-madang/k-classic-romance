// 질문 데이터
const questions = [
  {
    dimension: 'E/I',
    question: '연인과의 첫 만남에서 당신은?',
    optionA: {
      text: '적극적으로 대화를 이끌어가며 분위기를 띄운다',
      value: 'E'
    },
    optionB: {
      text: '상대방의 말을 경청하며 깊이 있게 대화한다',
      value: 'I'
    }
  },
  {
    dimension: 'F/T',
    question: '연인과의 갈등 상황에서 당신은?',
    optionA: {
      text: '감정을 먼저 이해하고 공감하려고 노력한다',
      value: 'F'
    },
    optionB: {
      text: '논리적으로 문제를 분석하고 해결책을 찾는다',
      value: 'T'
    }
  },
  {
    dimension: 'D/A',
    question: '연인과의 관계에서 당신은?',
    optionA: {
      text: '주도적으로 계획을 세우고 관계를 이끌어간다',
      value: 'D'
    },
    optionB: {
      text: '상대방의 의견을 존중하며 함께 결정한다',
      value: 'A'
    }
  },
  {
    dimension: 'O/S',
    question: '데이트 계획을 세울 때 당신은?',
    optionA: {
      text: '새롭고 특별한 경험을 추구한다',
      value: 'O'
    },
    optionB: {
      text: '검증된 안정적인 장소와 활동을 선호한다',
      value: 'S'
    }
  }
];

// 16가지 유형 해석 데이터
const typeDescriptions = {
  'EFDO': '활발하고 감정적이며 주도적이고 새로운 것을 좋아하는 당신은, 열정적인 연애를 추구합니다.',
  'EFDA': '활발하고 감정적이며 협조적이고 새로운 것을 좋아하는 당신은, 상호 존중하는 연애를 선호합니다.',
  'EFSO': '활발하고 감정적이며 주도적이고 안정적인 것을 좋아하는 당신은, 전통적이면서도 적극적인 연애를 합니다.',
  'EFSA': '활발하고 감정적이며 협조적이고 안정적인 것을 좋아하는 당신은, 따뜻하고 안정적인 연애를 추구합니다.',
  'ETDO': '활발하고 논리적이며 주도적이고 새로운 것을 좋아하는 당신은, 독립적이고 모험적인 연애를 선호합니다.',
  'ETDA': '활발하고 논리적이며 협조적이고 새로운 것을 좋아하는 당신은, 합리적이고 균형잡힌 연애를 합니다.',
  'ETSO': '활발하고 논리적이며 주도적이고 안정적인 것을 좋아하는 당신은, 체계적이고 신뢰할 수 있는 연애를 추구합니다.',
  'ETSA': '활발하고 논리적이며 협조적이고 안정적인 것을 좋아하는 당신은, 안정적이고 예측 가능한 연애를 선호합니다.',
  'IFDO': '내향적이고 감정적이며 주도적이고 새로운 것을 좋아하는 당신은, 깊이 있는 독특한 연애를 추구합니다.',
  'IFDA': '내향적이고 감정적이며 협조적이고 새로운 것을 좋아하는 당신은, 정서적으로 풍부한 연애를 선호합니다.',
  'IFSO': '내향적이고 감정적이며 주도적이고 안정적인 것을 좋아하는 당신은, 깊고 안정적인 연애를 합니다.',
  'IFSA': '내향적이고 감정적이며 협조적이고 안정적인 것을 좋아하는 당신은, 조용하고 따뜻한 연애를 추구합니다.',
  'ITDO': '내향적이고 논리적이며 주도적이고 새로운 것을 좋아하는 당신은, 독립적이고 지적인 연애를 선호합니다.',
  'ITDA': '내향적이고 논리적이며 협조적이고 새로운 것을 좋아하는 당신은, 합리적이고 깊이 있는 연애를 합니다.',
  'ITSO': '내향적이고 논리적이며 주도적이고 안정적인 것을 좋아하는 당신은, 체계적이고 신중한 연애를 추구합니다.',
  'ITSA': '내향적이고 논리적이며 협조적이고 안정적인 것을 좋아하는 당신은, 안정적이고 신뢰할 수 있는 연애를 선호합니다.'
};

// 고전 소설 인물 데이터
const characters = [
  {
    name: '성춘향',
    type: 'IFSA',
    description: '내향적이고 감정적이며 협조적이고 안정적인 연애를 추구하는 인물. 깊은 정과 충실한 사랑을 보여줍니다.',
    imageUrl: 'https://via.placeholder.com/300x400/8B4513/FFFFFF?text=성춘향'
  },
  {
    name: '이몽룡',
    type: 'ETDO',
    description: '활발하고 논리적이며 주도적이고 새로운 것을 좋아하는 인물. 적극적이고 모험적인 사랑을 합니다.',
    imageUrl: 'https://via.placeholder.com/300x400/1E3A8A/FFFFFF?text=이몽룡'
  },
  {
    name: '춘향',
    type: 'EFSA',
    description: '활발하고 감정적이며 협조적이고 안정적인 연애를 추구하는 인물. 따뜻하고 안정적인 사랑을 보여줍니다.',
    imageUrl: 'https://via.placeholder.com/300x400/8B4513/FFFFFF?text=춘향'
  },
  {
    name: '홍길동',
    type: 'ETDO',
    description: '활발하고 논리적이며 주도적이고 새로운 것을 좋아하는 인물. 독립적이고 모험적인 성격입니다.',
    imageUrl: 'https://via.placeholder.com/300x400/1E3A8A/FFFFFF?text=홍길동'
  },
  {
    name: '심청',
    type: 'IFSA',
    description: '내향적이고 감정적이며 협조적이고 안정적인 연애를 추구하는 인물. 희생적이고 깊은 사랑을 합니다.',
    imageUrl: 'https://via.placeholder.com/300x400/8B4513/FFFFFF?text=심청'
  },
  {
    name: '장화홍련',
    type: 'EFDO',
    description: '활발하고 감정적이며 주도적이고 새로운 것을 좋아하는 인물. 열정적이고 적극적인 사랑을 보여줍니다.',
    imageUrl: 'https://via.placeholder.com/300x400/8B4513/FFFFFF?text=장화홍련'
  },
  {
    name: '허생',
    type: 'ITSA',
    description: '내향적이고 논리적이며 협조적이고 안정적인 연애를 추구하는 인물. 신중하고 안정적인 사랑을 합니다.',
    imageUrl: 'https://via.placeholder.com/300x400/1E3A8A/FFFFFF?text=허생'
  },
  {
    name: '옥단',
    type: 'IFDO',
    description: '내향적이고 감정적이며 주도적이고 새로운 것을 좋아하는 인물. 독특하고 깊이 있는 사랑을 추구합니다.',
    imageUrl: 'https://via.placeholder.com/300x400/8B4513/FFFFFF?text=옥단'
  }
];

