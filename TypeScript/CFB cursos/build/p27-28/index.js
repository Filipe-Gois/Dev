"use strict";
class Teste {
}
let curso1 = {
    titulo: "ts",
    descricao: "",
    numAulas: 37,
    numMaximoAlunos: 1,
    iniciarCurso(t) {
        console.log("Olá," + t);
    },
};
console.log(curso1);
curso1.iniciarCurso("filipe");
