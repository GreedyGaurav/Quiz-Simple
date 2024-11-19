const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: 2,
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: 3,
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language",
    ],
    answer: 1,
  },
  {
    question: "What year was JavaScript launched?",
    options: ["1996", "1995", "1994", "None of the above"],
    answer: 1,
  },
];

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  clearOptions();
  const currentQuestion = quizData[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => selectAnswer(index));
    optionsEl.appendChild(button);
  });
}

function clearOptions() {
  optionsEl.innerHTML = "";
  resultEl.textContent = "";
}

function selectAnswer(selectedIndex) {
  const currentQuestion = quizData[currentQuestionIndex];
  if (selectedIndex === currentQuestion.answer) {
    score++;
    resultEl.textContent = "Correct!";
    resultEl.style.color = "green";
  } else {
    resultEl.textContent = "Wrong!";
    resultEl.style.color = "red";
  }
  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
    nextBtn.style.display = "none";
  } else {
    showResult();
  }
});

function showResult() {
  questionEl.textContent = `You scored ${score} out of ${quizData.length}!`;
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none";
  resultEl.style.color = "#333";
}

loadQuestion();
