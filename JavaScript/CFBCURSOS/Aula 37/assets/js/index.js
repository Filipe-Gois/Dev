"use strict";

//propagação de evento: Ex: ao clicar em qualquer elemento filho de uma div, é acionado o evento de onclick da div pai
//stopPropagation(): impede que o evento seja propagado para os elementos filhos

const caixa1 = document.querySelector("#caixa1");

const c1 = [...document.querySelectorAll(".curso1")];

caixa1.addEventListener("click", (evento) => {
  alert("clicou");
});

c1.map((e) =>
  e.addEventListener("click", (evento) => {
    evento.stopPropagation();
  })
);
