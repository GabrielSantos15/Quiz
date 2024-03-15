const homeSection = document.querySelector("#homeSection");
const quizSection = document.querySelector("#quizSection");
const resultsSection = document.querySelector("#resultsSection");

const questionTxt = document.querySelector("#question");
let rightAnswer = undefined;

function newQuestion() {
  if (questionsData.length == 0) {
    quizSection.style.display = "none";
    resultsSection.style.display = "flex";
    return;
  }

  const inputsRadio = document.querySelectorAll('.answersContainer input');
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

function verify() {
  if (
    document.querySelector(".answersContainer input:checked + label")
      .innerHTML == rightAnswer
  ) {
    alert("certo");
  } else {
    alert("errado");
  }

  // mostrar reposta
  document.querySelector("#verify").style.display = "none";
  document.querySelector("#next").style.display = "block";

  const uncheckedInputs = document.querySelectorAll(
    ".answersContainer input:not(:checked)"
  );

  uncheckedInputs.forEach((input) => {
    input.disabled = true;
  });
}

function play() {
  homeSection.style.display = "none";
  quizSection.style.display = "flex";

  newQuestion();
}
