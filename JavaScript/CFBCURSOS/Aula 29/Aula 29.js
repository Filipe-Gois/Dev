//operador THIS
//indica que um elemento faz parte do escopo atual

function aluno(nome, nota) {
  //cria uma variavel com o nome "nome" e recebe o parametro como valor
  this.nome = nome;
  this.nota = nota;

  this.dados = () => {
    setTimeout(() => {
      console.log(this.nome);
      console.log(this.nota);
    }, 2000);
  };
}
const aluno1 = new aluno("Filipe", 99);

aluno1.dados();
