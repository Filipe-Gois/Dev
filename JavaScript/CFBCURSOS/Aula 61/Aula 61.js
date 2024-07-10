//objetos literais

//os objetos nao sao independentes
//se criar varios objts da mesma classe, todos vão apontar pro mesmo endenreço de memória *"COMO SE FOSSE UM OBJETO UNICO"*

//todas as variaveis apontam pro mesmo objeto declarado inicialmente *Pessoa*

const Pessoa = {
  nome: "Filipe",
  getNome: function () {
    return this.nome;
  },
  setNome: function (nome) {
    this.nome = nome;
  },
};

const p2 = Pessoa;
const p3 = Pessoa;

//se alterar o valor de uma, todas são alteradas
//maneiras de alterar o valor de uma propriedade:
p3.nome = "uga";
p2["nome"] = "Góis"; //sintaxe que usa a chave da propriedade
p2.setNome("ugafadsad");

console.log(Pessoa.nome);
console.log(p2.getNome());
console.log(p3.nome);
