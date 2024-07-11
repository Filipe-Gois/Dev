"use strict";
var Veiculos;
(function (Veiculos) {
    class Carro {
        nome;
        constructor(nome) {
            this.nome = nome;
        }
    }
    Veiculos.Carro = Carro;
})(Veiculos || (Veiculos = {}));
var Motores;
(function (Motores) {
    class Turbo {
        potencia;
        constructor(potencia) {
            this.potencia = potencia;
        }
    }
    class Motor {
    }
    Motores.Motor = Motor;
})(Motores || (Motores = {}));
const carro1 = new Veiculos.Carro("Ferrari");
console.log(carro1.nome);
