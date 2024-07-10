//Criando arquivo de configurações e facilitando mais a compilação

//tsc "caminho do arquivo" --target es2016
//informa qual versao do es o arquivo js deve ser criado (no caso, a de 2016)

//tsc "caminho do arquivo" --target esnext
//usa a versao mais atualizada por padrao *alterar isso no tsconfig.json*

//tsc --init
//gera o arquivo de configuracao

//outdir: defne o local dos arquivos de saida (arquivos js gerados)

//caso já tenha criado o tsconfig.json, só dar um tsc que já compila tudo

class Curso {
  curso: string | null = null;
  canal: string | null = null;
  constructor(curso: string | null = null, canal: string | null = null) {
    this.canal = canal;
    this.curso = curso;
  }
}

let c1 = new Curso("Cfb", "TypeScript");

console.log(c1.canal);
console.log(c1.curso);
