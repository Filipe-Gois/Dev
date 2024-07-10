"use strict";
class Curso {
    curso = null;
    canal = null;
    constructor(curso = null, canal = null) {
        this.canal = canal;
        this.curso = curso;
    }
}
let c1 = new Curso("Cfb", "TypeScript");
console.log(c1.canal);
console.log(c1.curso);
