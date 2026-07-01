// korean-math-vocab-data.js
// Vocab data for Korean Math Flashcards
// slot types: "vocab" (green/bold), "marker" (blue), "plain" (normal)

const vocabData = [
  {
    korean: "유리수",
    english: "rational number",
    sentence: {
      slots: [
        { text: "삼분의 이는 ", type: "plain" },
        { text: "유리수", type: "vocab" },
        { text: "예요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "Three halves is a rational number."
    }
  },
  {
    korean: "정수",
    english: "integer",
    sentence: {
      slots: [
        { text: "마이너스 삼은 ", type: "plain" },
        { text: "정수", type: "vocab" },
        { text: "예요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "Negative three is an integer."
    }
  },
  {
    korean: "자연수",
    english: "natural number / counting number",
    sentence: {
      slots: [
        { text: "일은 ", type: "plain" },
        { text: "자연수", type: "vocab" },
        { text: "예요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "One is a natural number."
    }
  },
  {
    korean: "양수",
    english: "positive number",
    sentence: {
      slots: [
        { text: "삼은 ", type: "plain" },
        { text: "양수", type: "vocab" },
        { text: "예요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "Three is a positive number."
    }
  },
  {
    korean: "음수",
    english: "negative number",
    sentence: {
      slots: [
        { text: "마이너스 오는 ", type: "plain" },
        { text: "음수", type: "vocab" },
        { text: "예요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "Negative five is a negative number."
    }
  },
  {
    korean: "덧셈",
    english: "addition",
    sentence: {
      slots: [
        { text: "이 문제는 ", type: "plain" },
        { text: "덧셈", type: "vocab" },
        { text: "이에요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "This problem is addition."
    }
  },
  {
    korean: "뺄셈",
    english: "subtraction",
    sentence: {
      slots: [
        { text: "이 문제는 ", type: "plain" },
        { text: "뺄셈", type: "vocab" },
        { text: "이에요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "This problem is subtraction."
    }
  },
  {
    korean: "곱셈",
    english: "multiplication",
    sentence: {
      slots: [
        { text: "이 문제는 ", type: "plain" },
        { text: "곱셈", type: "vocab" },
        { text: "이에요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "This problem is multiplication."
    }
  },
  {
    korean: "나눗셈",
    english: "division",
    sentence: {
      slots: [
        { text: "이 문제는 ", type: "plain" },
        { text: "나눗셈", type: "vocab" },
        { text: "이에요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "This problem is division."
    }
  },
  {
    korean: "계산 결과",
    english: "result / value",
    sentence: {
      slots: [
        { text: "칠은 ", type: "plain" },
        { text: "계산 결과", type: "vocab" },
        { text: "예요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "Seven is the result."
    }
  },
  {
    korean: "대소관계",
    english: "order / comparison",
    sentence: {
      slots: [
        { text: "이건 ", type: "plain" },
        { text: "대소관계", type: "vocab" },
        { text: "예요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "This is a comparison of size/order."
    }
  },
  {
    korean: "부등호",
    english: "inequality sign",
    sentence: {
      slots: [
        { text: "'>'는 ", type: "plain" },
        { text: "부등호", type: "vocab" },
        { text: "예요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "'>' is an inequality sign."
    }
  },
  {
    korean: "절댓값",
    english: "absolute value",
    sentence: {
      slots: [
        { text: "삼의 ", type: "plain" },
        { text: "절댓값", type: "vocab" },
        { text: "은", type: "marker" },
        { text: " 삼이에요.", type: "plain" }
      ],
      en: "The absolute value of three is three."
    }
  },
  {
    korean: "역수",
    english: "reciprocal",
    sentence: {
      slots: [
        { text: "이분의 삼의 ", type: "plain" },
        { text: "역수", type: "vocab" },
        { text: "는", type: "marker" },
        { text: " 삼분의 이예요.", type: "plain" }
      ],
      en: "The reciprocal of two-thirds is three-halves."
    }
  },
  {
    korean: "거듭제곱",
    english: "exponentiation / power",
    sentence: {
      slots: [
        { text: "이 문제는 ", type: "plain" },
        { text: "거듭제곱", type: "vocab" },
        { text: "이에요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "This problem is exponentiation."
    }
  },
  {
    korean: "지수",
    english: "exponent",
    sentence: {
      slots: [
        { text: "2³에서 3이 ", type: "plain" },
        { text: "지수", type: "vocab" },
        { text: "예요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "In 2³, the 3 is the exponent."
    }
  },
  {
    korean: "밑",
    english: "base (of a power)",
    sentence: {
      slots: [
        { text: "2³에서 2가 ", type: "plain" },
        { text: "밑", type: "vocab" },
        { text: "이에요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "In 2³, the 2 is the base."
    }
  },
  {
    korean: "분배법칙",
    english: "distributive property",
    sentence: {
      slots: [
        { text: "이건 ", type: "plain" },
        { text: "분배법칙", type: "vocab" },
        { text: "이에요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "This is the distributive property."
    }
  },
  {
    korean: "교환법칙",
    english: "commutative property",
    sentence: {
      slots: [
        { text: "이건 ", type: "plain" },
        { text: "교환법칙", type: "vocab" },
        { text: "이에요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "This is the commutative property."
    }
  },
  {
    korean: "결합법칙",
    english: "associative property",
    sentence: {
      slots: [
        { text: "이건 ", type: "plain" },
        { text: "결합법칙", type: "vocab" },
        { text: "이에요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "This is the associative property."
    }
  },
  {
    korean: "수직선",
    english: "number line",
    sentence: {
      slots: [
        { text: "이건 ", type: "plain" },
        { text: "수직선", type: "vocab" },
        { text: "이에요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "This is a number line."
    }
  },
  {
    korean: "점",
    english: "point",
    sentence: {
      slots: [
        { text: "여기가 ", type: "plain" },
        { text: "점", type: "vocab" },
        { text: "이에요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "Here is a point."
    }
  },
  {
    korean: "직선",
    english: "line",
    sentence: {
      slots: [
        { text: "이건 ", type: "plain" },
        { text: "직선", type: "vocab" },
        { text: "이에요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "This is a line."
    }
  },
  {
    korean: "선분",
    english: "line segment",
    sentence: {
      slots: [
        { text: "이건 ", type: "plain" },
        { text: "선분", type: "vocab" },
        { text: "이에요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "This is a line segment."
    }
  },
  {
    korean: "반직선",
    english: "ray",
    sentence: {
      slots: [
        { text: "이건 ", type: "plain" },
        { text: "반직선", type: "vocab" },
        { text: "이에요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "This is a ray."
    }
  },
  {
    korean: "평면",
    english: "plane",
    sentence: {
      slots: [
        { text: "이건 ", type: "plain" },
        { text: "평면", type: "vocab" },
        { text: "이에요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "This is a plane."
    }
  },
  {
    korean: "각",
    english: "angle",
    sentence: {
      slots: [
        { text: "여기가 ", type: "plain" },
        { text: "각", type: "vocab" },
        { text: "이에요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "Here is an angle."
    }
  },
  {
    korean: "각의 크기",
    english: "measure of an angle",
    sentence: {
      slots: [
        { text: "삼십 도가 이 ", type: "plain" },
        { text: "각의 크기", type: "vocab" },
        { text: "예요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "Thirty degrees is the measure of this angle."
    }
  },
  {
    korean: "교점",
    english: "point of intersection",
    sentence: {
      slots: [
        { text: "여기가 ", type: "plain" },
        { text: "교점", type: "vocab" },
        { text: "이에요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "Here is the point of intersection."
    }
  },
  {
    korean: "교선",
    english: "line of intersection",
    sentence: {
      slots: [
        { text: "이건 ", type: "plain" },
        { text: "교선", type: "vocab" },
        { text: "이에요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "This is the line of intersection."
    }
  },
  {
    korean: "평각",
    english: "straight angle",
    sentence: {
      slots: [
        { text: "백팔십 도는 ", type: "plain" },
        { text: "평각", type: "vocab" },
        { text: "이에요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "180 degrees is a straight angle."
    }
  },
  {
    korean: "맞꼭지각",
    english: "vertical angles",
    sentence: {
      slots: [
        { text: "이 두 각은 ", type: "plain" },
        { text: "맞꼭지각", type: "vocab" },
        { text: "이에요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "These two angles are vertical angles."
    }
  },
  {
    korean: "동위각",
    english: "corresponding angles",
    sentence: {
      slots: [
        { text: "이 두 각은 ", type: "plain" },
        { text: "동위각", type: "vocab" },
        { text: "이에요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "These two angles are corresponding angles."
    }
  },
  {
    korean: "엇각",
    english: "alternate interior angles",
    sentence: {
      slots: [
        { text: "이 두 각은 ", type: "plain" },
        { text: "엇각", type: "vocab" },
        { text: "이에요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "These two angles are alternate interior angles."
    }
  },
  {
    korean: "평행",
    english: "parallel",
    sentence: {
      slots: [
        { text: "이 두 직선은 ", type: "plain" },
        { text: "평행", type: "vocab" },
        { text: "이에요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "These two lines are parallel."
    }
  },
  {
    korean: "수직",
    english: "perpendicular",
    sentence: {
      slots: [
        { text: "이 두 직선은 ", type: "plain" },
        { text: "수직", type: "vocab" },
        { text: "이에요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "These two lines are perpendicular."
    }
  },
  {
    korean: "꼬인 위치",
    english: "skew lines",
    sentence: {
      slots: [
        { text: "이 두 직선은 ", type: "plain" },
        { text: "꼬인 위치", type: "vocab" },
        { text: "예요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "These two lines are skew."
    }
  },
  {
    korean: "중점",
    english: "midpoint",
    sentence: {
      slots: [
        { text: "여기가 ", type: "plain" },
        { text: "중점", type: "vocab" },
        { text: "이에요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "Here is the midpoint."
    }
  },
  {
    korean: "거리",
    english: "distance",
    sentence: {
      slots: [
        { text: "오 센티미터가 두 점 사이의 ", type: "plain" },
        { text: "거리", type: "vocab" },
        { text: "예요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "5cm is the distance between the two points."
    }
  },
  {
    korean: "정육면체",
    english: "cube",
    sentence: {
      slots: [
        { text: "이건 ", type: "plain" },
        { text: "정육면체", type: "vocab" },
        { text: "예요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "This is a cube."
    }
  },
  {
    korean: "모서리",
    english: "edge",
    sentence: {
      slots: [
        { text: "여기가 ", type: "plain" },
        { text: "모서리", type: "vocab" },
        { text: "예요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "Here is an edge."
    }
  },
  {
    korean: "면",
    english: "face",
    sentence: {
      slots: [
        { text: "여기가 ", type: "plain" },
        { text: "면", type: "vocab" },
        { text: "이에요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "Here is a face."
    }
  },
  {
    korean: "정육각형",
    english: "regular hexagon",
    sentence: {
      slots: [
        { text: "이건 ", type: "plain" },
        { text: "정육각형", type: "vocab" },
        { text: "이에요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "This is a regular hexagon."
    }
  },
  {
    korean: "각기둥",
    english: "prism",
    sentence: {
      slots: [
        { text: "이건 ", type: "plain" },
        { text: "각기둥", type: "vocab" },
        { text: "이에요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "This is a prism."
    }
  },
  {
    korean: "삼각기둥",
    english: "triangular prism",
    sentence: {
      slots: [
        { text: "이건 ", type: "plain" },
        { text: "삼각기둥", type: "vocab" },
        { text: "이에요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "This is a triangular prism."
    }
  },
  {
    korean: "밑면",
    english: "base (of a solid)",
    sentence: {
      slots: [
        { text: "여기가 ", type: "plain" },
        { text: "밑면", type: "vocab" },
        { text: "이에요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "Here is the base."
    }
  },
  {
    korean: "전개도",
    english: "net (of a solid)",
    sentence: {
      slots: [
        { text: "이건 ", type: "plain" },
        { text: "전개도", type: "vocab" },
        { text: "예요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "This is a net."
    }
  },
  {
    korean: "중심",
    english: "center",
    sentence: {
      slots: [
        { text: "여기가 ", type: "plain" },
        { text: "중심", type: "vocab" },
        { text: "이에요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "Here is the center."
    }
  },
  {
    korean: "지름",
    english: "diameter",
    sentence: {
      slots: [
        { text: "이 선이 ", type: "plain" },
        { text: "지름", type: "vocab" },
        { text: "이에요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "This line is the diameter."
    }
  },
  {
    korean: "반원",
    english: "semicircle",
    sentence: {
      slots: [
        { text: "이건 ", type: "plain" },
        { text: "반원", type: "vocab" },
        { text: "이에요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "This is a semicircle."
    }
  },
  {
    korean: "원주",
    english: "circumference",
    sentence: {
      slots: [
        { text: "이 선이 ", type: "plain" },
        { text: "원주", type: "vocab" },
        { text: "예요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "This line is the circumference."
    }
  },
  {
    korean: "서로 다른 두 점",
    english: "two distinct points",
    sentence: {
      slots: [
        { text: "A와 B는 ", type: "plain" },
        { text: "서로 다른 두 점", type: "vocab" },
        { text: "이에요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "A and B are two distinct points."
    }
  },
  {
    korean: "서로 다른 두 직선",
    english: "two distinct lines",
    sentence: {
      slots: [
        { text: "l과 m은 ", type: "plain" },
        { text: "서로 다른 두 직선", type: "vocab" },
        { text: "이에요", type: "marker" },
        { text: ".", type: "plain" }
      ],
      en: "l and m are two distinct lines."
    }
  }
];
