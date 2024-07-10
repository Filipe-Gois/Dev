//17:construtor: método que é automaticamente executado no ato de instanciar um novo objeto
//18:metodos
//19:modificadores de acesso: public (podem ser acessados de qualquer lugar), private(podem ser acessados só dentro da própria classe), protected (não pode ser alterada por fora da classe, mas pode alterar pelas classes filhas)
//se não definir um modificador de acesso o padrão será public

class Computador {
  nome: string;
  private memoriaRam: number;
  private frequenciaCpu: number;

  //só é acessado dentro da classe
  private ligado: boolean;
  constructor(nome: string, memoriaRam: number, frequenciaCpu: number) {
    //this. refere-se à propriedade da classe, nao do escopo do constructor
    this.nome = nome;
    this.memoriaRam = memoriaRam;
    this.frequenciaCpu = frequenciaCpu;

    //mesmo que a propriedade nao seja passada como parametro no construtor, é bom inicializa-la no mesmo
    this.ligado = false;
  }

  info(): void {
    console.log(
      `Nome: ${this.nome}, 
    Ram: ${this.memoriaRam}GB, 
    Cpu: ${this.frequenciaCpu}GHZ, 
    Está ligado ? R: ${this.ligado ? "Sim" : "Não"}`
    );
  }

  alterarRam(quantidadeRam: number): void {
    if (quantidadeRam <= 0) {
      throw new Error("Informe um número válido!");
    }

    this.memoriaRam = quantidadeRam;
  }

  ligar(): void {
    this.ligado = true;
  }
  desligar(): void {
    this.ligado = false;
  }
}

const pc1 = new Computador("Dell", 8, 3.1);
pc1.ligar();
pc1.alterarRam(1);
pc1.info();
