//INTERFACE e Objetos Literais

//olhar as aulas 20-26 para ver a palavra "implements"
// implements: é usado para garantir que uma classe respeite um contrato definido por uma ou mais interfaces.

//Em resumo, extends é usado para herdar implementação de outra classe, enquanto implements é usado para garantir que uma classe siga contratos definidos por interfaces, sem herdar implementação. Ambos são fundamentais para a criação de código bem estruturado e reutilizável em TypeScript.

//só foi declarado, nao tem nenhum valor ainda
interface CursoNovo {
  titulo: string;
  descricao: string;
  numAulas: number;
  numMaximoAlunos?: number;
  iniciarCurso(teste: string): void;
}

interface CursoProgramacao extends CursoNovo {
  aulas: number;
}

class Teste {}

let curso1: CursoNovo = {
  titulo: "ts",
  descricao: "",
  numAulas: 37,
  numMaximoAlunos: 1,
  iniciarCurso(t: string) {
    console.log("Olá," + t);
  },
};

console.log(curso1);
curso1.iniciarCurso("filipe");
