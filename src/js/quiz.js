const questoes = [
  {
    q: "Onde os microplásticos são encontrados atualmente?",
    opcs: [
      "Apenas nos oceanos",
      "Apenas em áreas urbanas",
      "Em praticamente todos os ambientes do planeta",
      "Apenas em regiões industriais"
    ],
    correto: 2
  },
  {
    q: "O que são microplásticos?",
    opcs: [
      "Plásticos maiores que 5 cm",
      "Fragmentos plásticos menores que 5 mm",
      "Gases liberados por plásticos",
      "Organismos microscópicos"
    ],
    correto: 1
  },
  {
    q: "Qual destes locais já registrou presença de microplásticos?",
    opcs: [
      "Apenas cidades costeiras",
      "Apenas desertos",
      "Apenas áreas industriais",
      "Ártico e Monte Everest"
    ],
    correto: 3
  },
  {
    q: "Como os microplásticos podem chegar à atmosfera?",
    opcs: [
      "Apenas pela queima de resíduos",
      "Por partículas suspensas transportadas pelo vento",
      "Apenas por atividades vulcânicas",
      "Apenas por tempestades"
    ],
    correto: 1
  },
  {
    q: "Por que a dispersão atmosférica é preocupante?",
    opcs: [
      "Porque limita a poluição a uma única região",
      "Porque reduz a quantidade de resíduos",
      "Porque transporta contaminantes para locais distantes",
      "Porque elimina microplásticos naturalmente"
    ],
    correto: 2
  },
  {
    q: "Qual tecnologia inspira o PlasticMap?",
    opcs: [
      "Blockchain",
      "Realidade Virtual",
      "Sensoriamento e monitoramento espacial",
      "Impressão 3D"
    ],
    correto: 2
  },
  {
    q: "Qual ODS possui maior relação com o projeto?",
    opcs: [
      "ODS 4",
      "ODS 7",
      "ODS 13",
      "ODS 16"
    ],
    correto: 2
  },
  {
    q: "Qual o principal objetivo do PlasticMap?",
    opcs: [
      "Remover plástico dos oceanos",
      "Produzir plástico biodegradável",
      "Visualizar e compreender a dispersão atmosférica dos microplásticos",
      "Vender sensores ambientais"
    ],
    correto: 2
  },
  {
    q: "Como o projeto contribui para a sustentabilidade?",
    opcs: [
      "Aumentando o consumo de plástico",
      "Incentivando o monitoramento e a conscientização ambiental",
      "Eliminando o uso de satélites",
      "Produzindo resíduos recicláveis"
    ],
    correto: 1
  },
  {
    q: "Qual é a principal característica preventiva do PlasticMap?",
    opcs: [
      "Fabricar sensores espaciais",
      "Detectar desmatamento",
      "Antecipar áreas potencialmente vulneráveis à contaminação",
      "Produzir relatórios financeiros"
    ],
    correto: 2
  }
];

let atual = 0;
let respostas = new Array(questoes.length).fill(null);

const quizArea      = document.getElementById("quiz-area");
const areaResultado = document.getElementById("area-resultado");
const qNum          = document.getElementById("q-num");
const qText         = document.getElementById("q-text");
const opcsEl        = document.getElementById("opc");
const mensagemErro  = document.getElementById("mensagem-erro");
const progPreencher = document.getElementById("prog");
const progText      = document.getElementById("prog-text");
const btnPrev       = document.getElementById("btn-prev");
const btnNext       = document.getElementById("btn-next");

function render() {
  const q      = questoes[atual];
  const ultimo = atual === questoes.length - 1;

  qNum.textContent  = "Pergunta " + (atual + 1) + " de C" + questoes.length;
  qText.textContent = q.q;

  opcsEl.innerHTML = "";

  q.opcs.forEach(function(opc, i) {
    var label = document.createElement("label");
    label.className = "opc" + (respostas[atual] === i ? " selected" : "");
    label.setAttribute("for", "opc-" + i);

    var input = document.createElement("input");
    input.type    = "radio";
    input.name    = "q" + atual;
    input.id      = "opc-" + i;
    input.value   = i;
    input.checked = (respostas[atual] === i);

    var span = document.createElement("span");
    span.className   = "opc-label";
    span.textContent = opc;

    label.appendChild(input);
    label.appendChild(span);

    label.addEventListener("click", function() {
      selecionarOpc(i);
    });

    opcsEl.appendChild(label);
  });

  mensagemErro.classList.add("hidden");

  btnPrev.disabled    = (atual === 0);
  btnNext.textContent = ultimo ? "Ver resultado →" : "Próxima →";
  btnNext.setAttribute("aria-label", ultimo ? "Ver resultado" : "Próxima pergunta");

  atualizarProgresso();
}

function selecionarOpc(i) {
  respostas[atual] = i;

  var labels = opcsEl.querySelectorAll(".opc");
  labels.forEach(function(label, idx) {
    label.classList.toggle("selected", idx === i);
    label.querySelector("input").checked = (idx === i);
  });

  mensagemErro.classList.add("hidden");
}

function nextQ() {
  if (respostas[atual] === null) {
    mensagemErro.classList.remove("hidden");
    return;
  }

  if (atual < questoes.length - 1) {
    atual++;
    render();
  } else {
    mostrarResultado();
  }
}

function prevQ() {
  if (atual > 0) {
    atual--;
    render();
  }
}

function atualizarProgresso() {
  var pct = Math.round(((atual + 1) / questoes.length) * 100);
  progPreencher.style.width = pct + "%";
  progPreencher.setAttribute("aria-valuenow", pct);
  progText.textContent = (atual + 1) + " / " + questoes.length;
}

function mostrarResultado() {

  var pontuacao = 0;
  for (var i = 0; i < questoes.length; i++) {
    if (respostas[i] === questoes[i].correto) pontuacao++;
  }
  var pct    = Math.round((pontuacao / questoes.length) * 100);
  var errado = questoes.length - pontuacao; 

  var estrelas = "";
  if      (pct === 100) estrelas = "★★★★★";
  else if (pct >= 80)   estrelas = "★★★★☆";
  else if (pct >= 60)   estrelas = "★★★☆☆";
  else if (pct >= 40)   estrelas = "★★☆☆☆";
  else                  estrelas = "★☆☆☆☆";

  var msg          = "";
  var corPontuacao = "";
  if (pct === 100) {
    msg          = "Perfeito! Você domina completamente o tema do PlasticMap.";
    corPontuacao = "var(--cor8)";
  } else if (pct >= 80) {
    msg          = "Ótimo resultado! Você entende bem a proposta do projeto e os conceitos de monitoramento espacial.";
    corPontuacao = "var(--cor8)";
  } else if (pct >= 60) {
    msg          = "Bom desempenho! Vale revisar alguns conceitos sobre dispersão atmosférica e sensoriamento remoto.";
    corPontuacao = "#E3A000";
  } else if (pct >= 40) {
    msg          = "Resultado parcial. Explore mais o tema de microplásticos e economia espacial antes de tentar novamente.";
    corPontuacao = "#E3A000";
  } else {
    msg          = "Continue estudando! O tema é fascinante. Explore o conteúdo do PlasticMap e tente novamente.";
    corPontuacao = "var(--cor1)";
  }

  document.getElementById("resultado-estrelas").textContent = estrelas;
  document.getElementById("resultado-pontuacao").innerHTML  =
    "<span style='color:" + corPontuacao + "'>" + pontuacao + "</span>" +
    "<span style='font-size:24px;font-weight:400;color:var(--cor7)'>/" + questoes.length + "</span>";
  document.getElementById("resultado-label").textContent    = pct + "% de aproveitamento";
  document.getElementById("rm-correto").textContent         = pontuacao;
  document.getElementById("rm-errado").textContent          = errado;   
  document.getElementById("rm-pct").textContent             = pct + "%";
  document.getElementById("resultado-mensagem").textContent = msg;

  var erradas = questoes.filter(function(q, i) {
    return respostas[i] !== q.correto;
  });

  if (erradas.length > 0) {
    var gabarito     = document.getElementById("gabarito");
    var gabaritoLista = document.getElementById("gabarito-lista");

    gabaritoLista.innerHTML = "";

    questoes.forEach(function(q, i) {
      if (respostas[i] === q.correto) return;

      var item = document.createElement("div");
      item.className = "gabarito-item";
      item.innerHTML =
        "<p class='gabarito-q'>P" + (i + 1) + ". " + q.q + "</p>" +
        "<p class='gabarito-wrong'>✕ Sua resposta: " + q.opcs[respostas[i]] + "</p>" +  
        "<p class='gabarito-right'>✓ Correta: "      + q.opcs[q.correto]    + "</p>";   
      gabaritoLista.appendChild(item);
    });

    gabarito.classList.remove("hidden");
  }


  quizArea.classList.add("hidden");
  areaResultado.classList.remove("hidden");
}

function resetQuiz() {
  atual     = 0;
  respostas = new Array(questoes.length).fill(null); 

  areaResultado.classList.add("hidden");
  document.getElementById("gabarito").classList.add("hidden");
  document.getElementById("gabarito-lista").innerHTML = "";
  quizArea.classList.remove("hidden");

  render();
}

render();

const menuIcone = document.getElementById("menu-icone");
const navMenu = document.querySelector("nav");

if (menuIcone && navMenu) {
    menuIcone.onclick = () => {
        navMenu.classList.toggle("active");
        menuIcone.classList.toggle("open");
    }
}
