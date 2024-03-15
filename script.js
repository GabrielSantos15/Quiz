const homeSection = document.querySelector("#homeSection")
const quizSection = document.querySelector("#quizSection")
const resultsSection = document.querySelector("#resultsSection")

const questionTxt = document.querySelector("#question");
let rightAnswer = undefined


function newQuestion() {
    if(questionsData.length == 0){
      quizSection.style.display = 'none'
      resultsSection.style.display = 'flex'
      
      return 
    }
  const question = randomQuestion();

  questionTxt.innerHTML = question.pergunta;

  const optionsResp = aleatorizarOrdem(question.respostas);

  for (let i = 0; i < optionsResp.length; i++) {
    document.querySelector(`#resp${i+1}`).innerHTML = optionsResp[i].txt

    if(optionsResp[i].status){
        rightAnswer = optionsResp[i].txt
    }
  }
}

function randomQuestion() {
    const index = Math.floor(Math.random() * questionsData.length)
    const random =  questionsData[index];
    
    questionsData.splice(index,1)

    return random
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

function verify(id){
    
    if(document.getElementById(id).innerHTML == rightAnswer){
        alert('certo')
        newQuestion();
    }else{
        alert('errado')
    }
    
}

function play(){
  homeSection.style.display = "none"
  quizSection.style.display = "block"

  newQuestion()
}

