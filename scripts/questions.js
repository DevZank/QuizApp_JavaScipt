export default [
  {
    question: "Qual é a diferença entre == e === em JavaScript?",
    answers: [
      {
        option:
          "== compara apenas valores, enquanto === compara valores e tipos de dados.",
        correct: true,
      },
      {
        option:
          "== é usado para comparações de valores estritos, enquanto === é usado para comparações de valores soltos.",
        correct: false,
      },
      { option: "== é equivalente a === em JavaScript.", correct: false },
    ],
  },
  {
    question: "O que é uma closure em JavaScript?",
    answers: [
      {
        option: "Uma função que não tem acesso às variáveis locais.",
        correct: false,
      },
      {
        option:
          "Uma função que pode acessar variáveis de seu escopo externo, mesmo após a execução da função externa ter sido concluída.",
        correct: true,
      },
      {
        option: "Uma função que pode acessar apenas variáveis globais.",
        correct: false,
      },
    ],
  },
  {
    question:
      "Como você pode iterar sobre os elementos de um array em JavaScript?",
    answers: [
      { option: "Usando a função forEach().", correct: true },
      { option: "Usando um loop for tradicional.", correct: false },
      { option: " Usando a função map().", correct: false },
    ],
  },
  {
    question: "Qual é a diferença entre null e undefined em JavaScript?",
    answers: [
      {
        option:
          "null indica a ausência de valor atribuído intencionalmente, enquanto undefined indica a ausência de valor atribuído automaticamente pelo JavaScript.",
        correct: true,
      },
      {
        option:
          "null e undefined são usados de forma intercambiável em JavaScript.",
        correct: false,
      },
      {
        option: "null e undefined são idênticos em JavaScript.",
        correct: false,
      },
    ],
  },
  {
    question: "Qual é a diferença entre let, const e var em JavaScript?",
    answers: [
      {
        option:
          "let é uma abreviação de const, e var é uma versão antiga de let.",
        correct: false,
      },
      {
        option:
          "let e var são usados para declaração de variáveis mutáveis, enquanto const é usada para declaração de variáveis imutáveis.",
        correct: false,
      },
      {
        option:
          "let e const têm escopo de bloco, enquanto var tem escopo de função.",
        correct: true,
      },
    ],
  },
];
