"use strict";

const cursos = ["HTML", "CSS", "JAVASCRIPT", "FLUTTER", "REACT", "SQL", "PHP"];

const caixa1 = document.querySelector("#caixa1");
//cria um novo elemento html
// const novoElemento = document.createElement("div");
// adiciona atributos ao elemento("atributo", "valor")
// novoElemento.setAttribute("id", "c7");
// novoElemento.setAttribute("class", "curso1");
// novoElemento.innerHTML = `Flutter`;
// caixa1.appendChild(novoElemento);

cursos.map((elemento, index) => {
  const novoElemento = document.createElement("div");

  novoElemento.innerHTML = elemento;
  novoElemento.setAttribute("id", `c${index+1}`);
  novoElemento.setAttribute("class", "curso1");
  caixa1.appendChild(novoElemento);
});
