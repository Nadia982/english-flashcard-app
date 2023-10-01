const questions = [
  {
    question: "Which option is phrased correctly?",
    answers: [
      { text: "Which time is it?", correct: false },
      { text: "What time is it?", correct: true },
    ],
  },
  {
    question: "Which option is phrased correctly?",
    answers: [
      { text: "I moved to the US?", correct: true },
      { text: "I moved to US", correct: false},
    ],
  },
  {
    question: "Which option is phrased correctly?",
    answers: [
      { text: "Thank you for accepting to help me.", correct: false },
      { text: "Thank you for agreeing to help me.", correct: true },
    ],
  },
  {
    question: "Which option is phrased correctly?",
    answers: [
      { text: "He washed his feets.", correct: false },
      { text: "He washed his feet.", correct: true },
    ],
  },
  {
    question: "Which option is phrased correctly?",
    answers: [
      { text: "I'll call you when I come back.", correct: true },
      { text: "I'll call you when I'll come back.", correct: false },
    ],
  },
  {
    question: "Which option is phrased correctly?",
    answers: [
      { text: "Please let me know if I make a mistake.", correct: true },
      { text: "Please let me know if I do a mistake.", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;


