"use strict";

const cursoDestacado = `curso-destacado`;
const caixa1 = document.querySelector("#caixa1");
const caixa2 = document.querySelector("#caixa2");
const botaoCopiar = document.querySelector("#btn_copiar");
const cursos = [...document.querySelectorAll(".curso1")];

cursos.map((elemento) => {
  elemento.addEventListener("click", (evento) => {
    const curso = evento.target;
    curso.classList.toggle(cursoDestacado);
  });
});

botaoCopiar.addEventListener("click", () => {
  const cursosSelecionados = [
    ...document.querySelectorAll("." + cursoDestacado),
  ];

  //valida quais elementos com a class "curso1" nao possuem a class ".${cursoDestacado}"
  const cursosNaoSelecionados = [
    ...document.querySelectorAll(`.curso1:not(.${cursoDestacado})`),
  ];

  cursosSelecionados.map((el) => {
    caixa2.appendChild(el);
  });

  cursosNaoSelecionados.map((el) => {
    caixa1.appendChild(el);
  });
});
