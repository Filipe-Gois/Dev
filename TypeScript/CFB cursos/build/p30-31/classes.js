"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mouse = exports.Coisas = void 0;
const Coisas = ["Cadeira", "Tv"];
exports.Coisas = Coisas;
class Person {
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
class Mouse {
    cor;
    idade;
    constructor(cor, idade) {
        this.cor = cor;
        this.idade = idade;
    }
}
exports.Mouse = Mouse;
exports.default = Person;
