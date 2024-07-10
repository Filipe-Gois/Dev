//tipo OBJECT
//n precisa tipar assim caso seja um obj "dados:object"
let dados = {
  nome: "Filipe",
  idade: 17,
  status: true,
  cumprimento: () => {
    console.log("oi");
  },
  info: (p: string) => {
    console.log(p);
  },
};

console.log(typeof dados);
dados.cumprimento();
dados.info(dados.nome);
