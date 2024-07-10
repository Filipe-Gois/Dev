//PROTOTYPE

//propriedade q todo obj js tem
//serve p adicionar um propriedade ou metodo a um obj

const Nave = function (energia) {
  this.energia = energia;
  this.disparos = 100;
};

const n1 = new Nave(200);

//NÃO FUNCIONA
// Nave.vidas = 2;

//o atributo "vidas" aparece dentro do objeto "prototype"
Nave.prototype.vidas = 2;

Nave.prototype.disparar = function () {
  if (this.disparos > 0) {
    this.disparos--;
  }
};

n1.disparar();
n1.disparar();
n1.disparar();
n1.disparar();
console.log(n1);
n1.disparar();
console.log(n1.vidas);
