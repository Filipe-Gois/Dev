//Classes

class Pc {
  nome: string;
  memoriaRam: number;
  frequenciaCpu: number;
  ligado: boolean;
  constructor(
    nome: string,
    memoriaRam: number,
    frequenciaCpu: number,
    ligado: boolean
  ) {
    this.nome = nome;
    this.memoriaRam = memoriaRam;
    this.frequenciaCpu = frequenciaCpu;
    this.ligado = ligado;
  }
}

// const pc1 = new Computador();
