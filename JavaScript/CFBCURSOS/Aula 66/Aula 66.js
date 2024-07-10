//static

// ao criar um metodo ou propriedade static, o mesmo pode ser invocado sem precisar ser instanciado *é como se o membro static pertencesse a classe, não aos objetos(instancias)*

class Npc {
  static alerta = false;
  constructor(energia) {
    this.energia = energia;
  }

  info = function () {
    console.log(
      `Energia: ${this.energia}. Alerta: ${Npc.alerta ? "Sim" : "Não"} `
    );
  };
  static alertar = function () {
    Npc.alerta = true;
  };
}

//altera o "alerta de todos os objetos, por que está alterando na classe, nao em alguma instancia em especifico"

Npc.alertar();

const npc1 = new Npc(123);
const npc2 = new Npc(12);
const npc3 = new Npc(521);

//ISSO NAO FUNCIONA, POR QUE O METODO NAO É DO OBJETO, E SIM DA CLASSE
// npc1.alertar()

npc1.info();
npc2.info();
npc3.info();
