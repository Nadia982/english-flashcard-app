const questions = [
  {
    question:
      "Which word should be used to fill the gap in the following sentence? '_______ time is it?'",
    answers: [
      { text: "Which", correct: false },
      { text: "What", correct: true },
    ],
  },
  {
    question: "Which phrase is correct?",
    answers: [
      { text: "I moved to the US?", correct: true },
      { text: "I moved to US", correct: false },
    ],
  },
  {
    question: "Which phrase is correct?",
    answers: [
      { text: "Thank you for accepting to help me.", correct: false },
      { text: "Thank you for agreeing to help me.", correct: true },
    ],
  },
  {
    question: "Which phrase is correct?",
    answers: [
      { text: "He washed his feets.", correct: false },
      { text: "He washed his feet.", correct: true },
    ],
  },
  {
    question: "Which phrase is correct?",
    answers: [
      { text: "I'll call you when I come back.", correct: true },
      { text: "I'll call you when I'll come back.", correct: false },
    ],
  },
  {
    question: "Which phrase is correct?",
    answers: [
      { text: "Please let me know if I make a mistake.", correct: true },
      { text: "Please let me know if I do a mistake.", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

const startQuiz = () => {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
};

const showQuestion = () => {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
};

const resetState = () => {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
};

const selectAnswer = (e) => {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true"; 
    if(isCorrect){
        selectedBtn.classList.add("correct");
    } else {
        selectedBtn.classList.add("incorrect");
    }
}

startQuiz();
