"use strict";
class Computador {
    nome;
    memoriaRam;
    frequenciaCpu;
    ligado;
    constructor(nome, memoriaRam, frequenciaCpu) {
        this.nome = nome;
        this.memoriaRam = memoriaRam;
        this.frequenciaCpu = frequenciaCpu;
        this.ligado = false;
    }
    info() {
        console.log(`Nome: ${this.nome}, 
    Ram: ${this.memoriaRam}GB, 
    Cpu: ${this.frequenciaCpu}GHZ, 
    Está ligado ? R: ${this.ligado ? "Sim" : "Não"}`);
    }
    alterarRam(quantidadeRam) {
        if (quantidadeRam <= 0) {
            throw new Error("Informe um número válido!");
        }
        this.memoriaRam = quantidadeRam;
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
}
const pc1 = new Computador("Dell", 8, 3.1);
pc1.ligar();
pc1.alterarRam(1);
pc1.info();
