const homeSection = document.querySelector("#homeSection");
const quizSection = document.querySelector("#quizSection");
const resultsSection = document.querySelector("#resultsSection");

const questionTxt = document.querySelector("#question");

const questionsNumber = questionsData.length;
let rightAnswer = undefined;

let startTime;
let endTime;
let points = 0;

function play() {
  homeSection.style.display = "none";
  quizSection.style.display = "flex";

  startTime = new Date();

  newQuestion();
}

function newQuestion() {
  if (questionsData.length == 0) {
    showResults();
    return;
  }

  document.querySelector("#verify").classList.add("disabled")
  document.querySelector("#verify").style.display = "block";
  document.querySelector("#next").style.display = "none";


  const inputs = document.querySelectorAll(".answersContainer label");

  inputs.forEach((input) => {
    if (input.classList.contains("correct")) {
      input.classList.remove("correct");
    } else if (input.classList.contains("wrong")) {
      input.classList.remove("wrong");
    }
  });

  const inputsRadio = document.querySelectorAll(".answersContainer input");
  inputsRadio.forEach((input) => {
    input.disabled = false;
    input.checked = false;
  });

  const question = randomQuestion();

  questionTxt.innerHTML = question.pergunta;

  const optionsResp = aleatorizarOrdem(question.respostas);

  for (let i = 0; i < optionsResp.length; i++) {
    document.querySelector(`#resp${i + 1}`).innerHTML = optionsResp[i].txt;

    if (optionsResp[i].status) {
      rightAnswer = optionsResp[i].txt;
    }
  }
}

function randomQuestion() {
  const index = Math.floor(Math.random() * questionsData.length);
  const random = questionsData[index];

  questionsData.splice(index, 1);

  return random;
}

function aleatorizarOrdem(lista) {
  for (let indice = lista.length; indice; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * indice);

    // guarda de um índice aleatório da lista
    const elemento = lista[indice - 1];

    lista[indice - 1] = lista[indiceAleatorio];

    lista[indiceAleatorio] = elemento;
  }
  return lista;
}

function enableVerfy(){
  document.querySelector("#verify").classList.remove("disabled")
}
function verify() {
  if (document.querySelector("#verify").classList.contains("disabled")) return;

  if (
    document.querySelector(".answersContainer input:checked + label")
      .innerHTML == rightAnswer
  ) {
    points++;

    const audioCorrect = new Audio("sounds/correct.mp3");
    audioCorrect.play();
  } else {
    const audioIncorrect = new Audio("sounds/error.mp3");
    audioIncorrect.play();
  }

  // mostrar reposta
  document.querySelector("#verify").style.display = "none";
  document.querySelector("#next").style.display = "block";

  document.querySelector(".progress .progressValue").style.width = `${
    100 - (questionsData.length * 100) / questionsNumber
  }%`;

  const inputs = document.querySelectorAll(".answersContainer label");

  inputs.forEach((input) => {
    if (input.innerHTML == rightAnswer) {
      input.classList.add("correct");
    } else {
      input.classList.add("wrong");
    }
  });

  const uncheckedInputs = document.querySelectorAll(
    ".answersContainer input:not(:checked)"
  );

  uncheckedInputs.forEach((input) => {
    input.disabled = true;
  });
}

function showResults() {
  quizSection.style.display = "none";
  resultsSection.style.display = "flex";

  document.getElementById("point").innerHTML = points;
  document.getElementById("questionsNumber").innerHTML = questionsNumber;

  endTime = new Date();

  const diferenceTime = (endTime - startTime) / 1000;

  document.getElementById("temp").innerHTML = convertSeconds(diferenceTime);
}

function convertSeconds(seconds) {
  const h = Math.floor(seconds / 3600);
  const min = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);

  if (h > 0) {
    return `
    ${h.toString().padStart(2, "0")}:
    ${min.toString().padStart(2, "0")}:
    ${s.toString().padStart(2, "0")}`;
  } else {
    return `
    ${min.toString().padStart(2, "0")}:
    ${s.toString().padStart(2, "0")}`;
  }
}

function reload() {
  window.location.reload();
}