"use strict";

let cursos = ["HTML", "CSS", "JAVASCRIPT", "FLUTTER", "REACT", "SQL", "PHP"];

const caixa1 = document.querySelector("#caixa1");
//cria um novo elemento html
// const novoElemento = document.createElement("div");
// // adiciona atributos ao elemento("atributo", "valor")
// novoElemento.setAttribute("id", "c7");
// novoElemento.setAttribute("class", "curso1");
// novoElemento.innerHTML = `Flutter`;
// caixa1.appendChild(novoElemento);

cursos.map((elemento, index) => {
  const novoElemento = document.createElement("div");

  novoElemento.innerHTML = elemento;
  novoElemento.setAttribute("id", `c${index + 1}`);
  novoElemento.setAttribute("class", "curso1");

  const btnLixeira = document.createElement("img");
  btnLixeira.setAttribute("src", "./assets/images/lixeira.svg");
  btnLixeira.setAttribute("class", "btn-lixeira");

  novoElemento.appendChild(btnLixeira);

  btnLixeira.addEventListener("click", (e) => {
    // cursos = cursos.filter((c) => e.target.innerHTML !== c);
    console.log(e.target.parentNode);

    //removendo o elemento pai da lixeira, que é a div com o nome do curso
    caixa1.removeChild(e.target.parentNode);
  });
  caixa1.appendChild(novoElemento);
});
