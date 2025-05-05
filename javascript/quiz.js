document.addEventListener("DOMContentLoaded", function () {
  const btnSim = document.getElementById("btn-sim");
  const btnNao = document.getElementById("btn-nao");

  btnSim.addEventListener("click", iniciarQuiz);
  btnNao.addEventListener("click", () => {
    window.location.href = "PaginaInicial.html";
  });
});

const perguntas = [
  {
    pergunta:
      "Qual é uma consequência direta do aumento da concentração de gases de efeito estufa?",
    opcoes: [
      "Aumento da atividade vulcânica",
      "Elevação do nível do mar",
      "Redução da acidez dos oceanos",
      "Deslocamento das placas tectônicas",
    ],
    resposta: 1,
  },
  {
    pergunta:
      "Qual gás é liberado em grandes quantidades por atividades agrícolas, especialmente pela pecuária?",
    opcoes: [
      "Ozônio (O₃)",
      "Metano (CH₄)",
      "Monóxido de carbono (CO)",
      "Vapor d'água",
    ],
    resposta: 1,
  },
  {
    pergunta: "Como o derretimento do permafrost afeta o aquecimento global?",
    opcoes: [
      "Reduz a emissão de gases",
      "Aumenta a absorção de CO2",
      "Libera metano preso no solo",
      "Gera chuvas ácidas",
    ],
    resposta: 2,
  },
  {
    pergunta:
      "Qual destes setores não é um dos maiores emissores de gases do efeito estufa?",
    opcoes: ["Energia", "Transporte", "Educação", "Agricultura"],
    resposta: 2,
  },
  {
    pergunta: "O que significa neutralidade de carbono?",
    opcoes: [
      "Parar completamente a emissão de gases",
      "Compensar as emissões com ações que removam CO2",
      "Utilizar apenas carros elétricos",
      "Usar gás natural no lugar de carvão",
    ],
    resposta: 1,
  },
  {
    pergunta: "Qual é o papel das florestas no ciclo do carbono?",
    opcoes: [
      "Produzir carbono",
      "Absorver CO2 da atmosfera",
      "Impedir a formação de ozônio",
      "Gerar gases do efeito estufa",
    ],
    resposta: 1,
  },
  {
    pergunta:
      "Qual dessas ações ajuda diretamente a mitigar o aquecimento global?",
    opcoes: [
      "Instalação de energia solar",
      "Usar roupas de algodão",
      "Beber água da torneira",
      "Aumentar o uso de fertilizantes",
    ],
    resposta: 0,
  },
  {
    pergunta: "Por que o nível do mar está subindo?",
    opcoes: [
      "Aumento de terremotos submarinos",
      "Expansão térmica da água e derretimento de geleiras",
      "Redução da pressão atmosférica",
      "Formação de novas calotas de gelo",
    ],
    resposta: 1,
  },
  {
    pergunta: "O que representa a sigla 'CO₂'?",
    opcoes: [
      "Carbono duplo extraído",
      "CO₂ elétrico",
      "Equivalente de dióxido de carbono",
      "Ciclo oxidativo do ozônio",
    ],
    resposta: 2,
  },
  {
    pergunta: "A acidificação dos oceanos é causada principalmente por:",
    opcoes: [
      "Poluição por petróleo",
      "Absorção de CO₂ atmosférico",
      "Plásticos nos mares",
      "Fertilizantes agrícolas",
    ],
    resposta: 1,
  },
];

let perguntaAtual = 0;
let pontuacao = 0;
let respostasUsuario = [];

function iniciarQuiz() {
  document.getElementById("start-quiz").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  mostrarPergunta();
}

function mostrarPergunta() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";
  const q = perguntas[perguntaAtual];
  const titulo = document.createElement("h2");
  titulo.innerText = q.pergunta;
  container.appendChild(titulo);

  q.opcoes.forEach((opcao, index) => {
    const botao = document.createElement("button");
    botao.innerText = opcao;
    botao.onclick = () => verificarResposta(index);
    container.appendChild(botao);
  });
}

function verificarResposta(indice) {
  respostasUsuario.push(indice);

  if (indice === perguntas[perguntaAtual].resposta) {
    pontuacao++;
  }
  perguntaAtual++;

  if (perguntaAtual < perguntas.length) {
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  const container = document.getElementById("quiz-container");
  container.style.display = "none";

  const resultado = document.getElementById("result");
  resultado.style.display = "block";

  const titulo = document.createElement("h2");
  titulo.innerText = `Você acertou ${pontuacao} de ${perguntas.length} perguntas.`;
  resultado.appendChild(titulo);

  perguntas.forEach((q, i) => {
    const bloco = document.createElement("div");
    bloco.style.marginBottom = "20px";
    bloco.style.textAlign = "left";
    bloco.style.border = "1px solid #ccc";
    bloco.style.borderRadius = "10px";
    bloco.style.padding = "15px";

    const perguntaEl = document.createElement("p");
    perguntaEl.innerHTML = `<strong>${i + 1}. ${q.pergunta}</strong>`;
    bloco.appendChild(perguntaEl);

    q.opcoes.forEach((opcao, index) => {
      const opcaoEl = document.createElement("p");
      opcaoEl.innerText = opcao;

      if (index === q.resposta && respostasUsuario[i] === index) {
        opcaoEl.style.color = "green";
        opcaoEl.style.fontWeight = "bold";
      } else if (index === q.resposta) {
        opcaoEl.style.color = "green";
      } else if (index === respostasUsuario[i]) {
        opcaoEl.style.color = "red";
        opcaoEl.style.fontWeight = "bold";
      }

      bloco.appendChild(opcaoEl);
    });

    resultado.appendChild(bloco);
  });
  const botaoVoltar = document.createElement("button");
  botaoVoltar.innerText = "Voltar para a página inicial";
  botaoVoltar.style.marginTop = "30px";
  botaoVoltar.style.padding = "12px 24px";
  botaoVoltar.style.backgroundColor = "#2e5a2e";
  botaoVoltar.style.color = "white";
  botaoVoltar.style.border = "none";
  botaoVoltar.style.borderRadius = "8px";
  botaoVoltar.style.fontSize = "16px";
  botaoVoltar.style.cursor = "pointer";

  botaoVoltar.addEventListener("click", () => {
    window.location.href = "PaginaInicial.html";
  });
  resultado.appendChild(botaoVoltar);
}
