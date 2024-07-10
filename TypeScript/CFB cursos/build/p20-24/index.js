"use strict";
class Conta {
    numero;
    titular;
    saldoConta;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoConta = 0;
    }
    gerarNumeroConta() {
        const numero = Math.floor(Math.random() * 100000) + 1;
        return numero;
    }
    info() {
        console.log(`Titular: ${this.titular}. Número da conta: ${this.numero}`);
    }
    saldo() {
        return this.saldoConta;
    }
    deposito(valor) {
        this.saldoConta += valor;
    }
    saque(valor) {
        if (valor <= 0) {
            console.log("Valor deve ser maior que zero!");
            return;
        }
        if (this.saldoConta >= valor) {
            this.saldoConta -= valor;
        }
        else {
            console.log("Saldo insuficiente!");
        }
    }
}
class PessoaFisica extends Conta {
    cpf;
    constructor(titular, cpf) {
        super(titular);
        this.cpf = cpf;
        console.log(`Titular: ${this.titular}`);
    }
    info() {
        super.info();
        console.log(`CPF: ${this.cpf}`);
    }
    deposito(valor) {
        if (valor <= 1000) {
            super.deposito(valor);
        }
        else {
            console.log("Valor muito alto!");
        }
    }
    saque(valor) {
        if (valor > 1000) {
            console.log("Valor muito alto!");
        }
        else {
            super.saque(valor);
        }
    }
}
class PessoaJuridica extends Conta {
    cnpj;
    constructor(titular, cnpj) {
        super(titular);
        this.cnpj = cnpj;
        console.log(`Titular: ${this.titular}`);
    }
    info() {
        super.info();
        console.log(`CNPJ: ${this.cnpj}`);
    }
    deposito(valor) {
        if (valor <= 10000) {
            super.deposito(valor);
        }
        else {
            console.log("Valor muito alto!");
        }
    }
    saque(valor) {
        if (valor > 10000) {
            console.log("Valor muito alto!");
        }
        else {
            super.saque(valor);
        }
    }
}
const contaPf1 = new PessoaFisica("Filipe", 28866720178);
const contaPj1 = new PessoaJuridica("Filipe JURIDICO", 72591720178);
contaPj1.deposito(10000);
contaPj1.saque(5000);
contaPj1.saque(5000);
console.log(contaPj1.saldo());
