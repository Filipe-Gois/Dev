"use strict";

//Inserir elementos no dom em posições específicas

const caixa = document.querySelector(".caixa");

const novoElemento = document.createElement("div");

const cursoCss = document.querySelector("#c2");

//insere o "novoElemento" dentro de  "caixa" antes de "cursoCss"
caixa.insertBefore(novoElemento, cursoCss);


//não existe insertAfter, então teria que fazer uma lógica para pegar o próximo irmão do curso selecionado (no caso é o "cursoCss") e usar o .isertBefore()  


//.nextSibling: propriedade que acessa o próximo irmão