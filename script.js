const questions = [
  {
    question:
      "Which word should be used to fill the gap? '_______ time is it?'",
    answers: [
      { text: "Which", correct: false },
      { text: "What", correct: true },
    ],
  },
  {
    question: "Which phrase is correct?",
    answers: [
      { text: "I moved to the US", correct: true },
      { text: "I moved to US", correct: false },
    ],
  },
  {
    question: "Thank you for _______ to help me.",
    
    answers: [
      { text: "accepting", correct: false },
      { text: "agreeing", correct: true },
    ],
  },
  {
    question: "He washed his _______.",
    answers: [
      { text: "feets", correct: false },
      { text: "feet", correct: true },
    ],
  },
  {
    question: "I'll call you when _______ come back",
    answers: [
      { text: "I", correct: true },
      { text: "I'll", correct: false },
    ],
  },
  {
    question: "Please let me know if I _______ a mistake",
    answers: [
      { text: "make", correct: true },
      { text: "do", correct: false },
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
    button.setAttribute("tabindex", 0);
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
    // const notSelected = Array.from(answerButtons.children).filter(element => e != target);
    const isCorrect = selectedBtn.dataset.correct === "true";
        if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";    
}

const showScore = () => {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
  nextButton.innerHTML = `Play again`;
  nextButton.style.display = "block";
};

const handleNextButton = () => {
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion()
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  } else {
    startQuiz();
  }
})

startQuiz();
