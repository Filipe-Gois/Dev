//quando é usado class para criar a classe, é necessário o constructor
//dois jeitos de criar classes: class ou function

//function: n tem construtor, parametros sao passados nos ()
//classes declaradas com function são mais proximas dos objetos literais

//ARRUMAR O CODIGO, AS FUNCOES N ESTÃO FUNCIONANDO

function Pessoa(pnome, pidade) {
  this.nome = pnome;
  this.idade = pidade;
  this.getNome = function () {
    return this.nome;
  };
  this.setNome = (nome) => (this.nome = nome);

  this.getIdade = () => this.idade;
  this.setIdade = (idade) => (this.idade = idade);
}

let p1 = new Pessoa("Filipe, 17");

console.log(p1.getNome());
