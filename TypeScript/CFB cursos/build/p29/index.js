"use strict";
const teste = (v, u) => {
    return { v, u };
};
console.log(teste(true, "fefe"));
console.log(teste(true, 12));
class C_Teste {
    valor;
    constructor(valor) {
        this.valor = valor;
    }
}
const c_1 = new C_Teste(10);
const c_2 = new C_Teste("10");
console.log(c_1.valor);
console.log(c_2.valor);
