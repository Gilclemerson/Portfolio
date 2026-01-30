
const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const quizCard = document.getElementById("quiz-card");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const resultScreen = document.getElementById("result-screen");
const scoreEl = document.getElementById("score");




const questions = [
  {
    question: "Qual linguagem roda no navegador?",
    answers: ["Java", "C", "Python", "JavaScript"],
    correct: 3
  },
  {
    question: "Qual HTML significa?",
    answers: [
      "Hyper Trainer Marking Language",
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Text Markdown Language"
    ],
    correct: 1
  },
  {
    question: "Qual dessas não é uma linguagem de programação?",
    answers: ["Python", "HTML", "Java", "C++"],
    correct: 1
  },
  {
    question: "O que é JavaScript e qual é o seu papel nas páginas web?",
    answers: [
      "É uma linguagem de marcação usada para criar a estrutura do site",
      "É uma linguagem de estilo usada para definir cores e layouts",
      "É uma linguagem de programação que adiciona interatividade às páginas web",
      "É um banco de dados usado para armazenar informações do site"
    ],
    correct: 2
  },
  {
    question: "Onde o JavaScript é executado quando acessamos uma página web?",
    answers: [
      "No servidor onde o site está hospedado",
      "No banco de dados do site",
      "No navegador do usuário",
      "No sistema operacional do usuário"
    ],
    correct: 2
  },
  {
    question: "Qual método JavaScript é usado para localizar um elemento HTML pelo seu id?",
    answers: [
      "getElementByClass()",
      "querySelectorAll()",
      "getElementByName()",
      "getElementById()"
    ],
    correct: 3
  },
  {
    question: "Qual propriedade usamos para alterar o conteúdo interno de um elemento HTML usando JavaScript?",
    answers: [
      "style",
      "value",
      "innerHTML",
      "className"
    ],
    correct: 2
  },
  {
    question: "Qual propriedade JavaScript usamos para alterar o tamanho da fonte (font-size) de um elemento HTML?",
    answers: [
      "element.fontSize",
      "element.style.font",
      "element.style.fontSize",
      "element.textSize"
    ],
    correct: 2
  },
  {
    question: "Qual propriedade CSS (acessada pelo JavaScript) usamos para ocultar ou exibir um elemento HTML?",
    answers: [
      "visibility",
      "opacity",
      "display",
      "position"
    ],
    correct: 2
  },
  {
    question: "JavaScript e Java são a mesma linguagem?",
    answers: [
      "Sim, são apenas nomes diferentes para a mesma linguagem",
      "Sim, JavaScript é uma versão mais simples do Java",
      "Não, são linguagens diferentes com propósitos diferentes",
      "Não, mas funcionam exatamente da mesma forma"
    ],
    correct: 2
  },
  {
    question: "Quem criou o JavaScript e em que ano ele foi inventado?",
    answers: [
      "Tim Berners-Lee em 1990",
      "Brendan Eich em 1995",
      "Bill Gates em 2000",
      "Mark Zuckerberg em 2004"
    ],
    correct: 1
  },
  {
    question: "É necessário baixar ou instalar o JavaScript para usá-lo?",
    answers: [
      "Sim, é necessário instalar no computador",
      "Sim, é preciso baixar um plugin",
      "Não, pois os navegadores já vêm com JavaScript",
      "Não, pois ele funciona apenas no servidor"
    ],
    correct: 2
  },
  {
    question: "Qual é o papel do JavaScript em relação ao HTML e ao CSS?",
    answers: [
      "Criar a estrutura da página",
      "Definir o estilo visual da página",
      "Adicionar interatividade e comportamento à página",
      "Substituir o HTML e o CSS"
    ],
    correct: 2
  }
];
















let currentQuestion = 0;
let score = 0;

startBtn.addEventListener("click", () =>{
 startScreen.classList.add("hide");
 quizCard.classList.remove("hide");
 showQuestion();

})

function showQuestion() {
    feedbackEl.textContent = "";
    nextBtn.classList.add("hide");
    answersEl.innerHTML = "";

    const q = questions[currentQuestion];
    questionEl.textContent = q.question;


    q.answers.forEach((answer, index) =>{
        const btn = document.createElement("button");
        btn.textContent = answer;

        btn.addEventListener("click",() => {
           selectAnswer(btn, index);

        });

        answersEl.appendChild(btn);

    });
}


function selectAnswer(selectedButton, index){
      const correctIndex = questions[currentQuestion].correct;
      const buttons = answersEl.querySelectorAll("button");
      
      buttons.forEach(btn => btn.disabled = true);

      if( index === correctIndex){
        selectedButton.classList.add("correct");
        feedbackEl.textContent = "Resposta correta! "
        score++;
      }else{
          selectedButton.classList.add("wrong");
          buttons[correctIndex].classList.add("correct")
          feedbackEl.textContent = "Resposta incorreta! "
      }
      nextBtn.classList.remove("hide");
}

nextBtn.addEventListener("click", () => {
currentQuestion++;

if(currentQuestion < questions.length){
  showQuestion();
}else{
    showResult();
}



});

function showResult(){
  quizCard.classList.add("hide");
  resultScreen.classList.remove("hide");
  scoreEl.textContent = `Você acertou ${score} de ${questions.length} perguntas.`;

}