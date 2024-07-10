"use strict";

//getElementsByClassName: retorna uma coleção html com todos os elementos que utilizam determinada classe

const testesClass = [...document.getElementsByClassName("teste")];

testesClass.map((elemento, indice) => {
  elemento.innerHTML = "asd";

  elemento.classList.add("destaque");
});
