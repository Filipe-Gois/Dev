"use strict";
var diasDaSemana;
(function (diasDaSemana) {
    diasDaSemana[diasDaSemana["domingo"] = 0] = "domingo";
    diasDaSemana[diasDaSemana["segunda"] = 1] = "segunda";
    diasDaSemana[diasDaSemana["terca"] = 2] = "terca";
    diasDaSemana[diasDaSemana["quarta"] = 3] = "quarta";
    diasDaSemana[diasDaSemana["quinta"] = 4] = "quinta";
    diasDaSemana[diasDaSemana["sexta"] = 5] = "sexta";
    diasDaSemana[diasDaSemana["sabado"] = 6] = "sabado";
})(diasDaSemana || (diasDaSemana = {}));
console.log(diasDaSemana.domingo);
console.log(diasDaSemana["quarta"]);
console.log(diasDaSemana[6]);
console.log(diasDaSemana[new Date().getDay()]);
var cores;
(function (cores) {
    cores["branco"] = "#FFF";
    cores["preto"] = "#000";
    cores["vermelho"] = "#f00";
    cores["amarelo"] = "#ff0";
})(cores || (cores = {}));
console.log(cores["amarelo"]);
console.log(cores.branco);
var tipoUsuario;
(function (tipoUsuario) {
    tipoUsuario[tipoUsuario["artista"] = 0] = "artista";
    tipoUsuario[tipoUsuario["comum"] = 1] = "comum";
    tipoUsuario[tipoUsuario["adm"] = 2] = "adm";
})(tipoUsuario || (tipoUsuario = {}));
let tp = 1;
console.log("tp", tp);
const obj = {
    nome: "filipe",
    idade: 17,
};
