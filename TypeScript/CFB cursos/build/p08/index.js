"use strict";
let dados = {
    nome: "Filipe",
    idade: 17,
    status: true,
    cumprimento: () => {
        console.log("oi");
    },
    info: (p) => {
        console.log(p);
    },
};
console.log(typeof dados);
dados.cumprimento();
dados.info(dados.nome);
