//ENUM (enumeradores): são conjuntos de dados para classificar por valores numerais ou textuais

enum diasDaSemana {
  domingo = 0,
  segunda = 1,
  terca = 2,
  quarta = 3,
  quinta = 4,
  sexta = 5,
  sabado = 6,
}

console.log(diasDaSemana.domingo);
console.log(diasDaSemana["quarta"]);
//esse jeito só serve p enum numérico
console.log(diasDaSemana[6]);

console.log(diasDaSemana[new Date().getDay()]);

//------------
enum cores {
  branco = "#FFF",
  preto = "#000",
  vermelho = "#f00",
  amarelo = "#ff0",
}

console.log(cores["amarelo"]);
console.log(cores.branco);

//define um enum numerico automaticamente
enum tipoUsuario {
  artista,
  comum,
  adm,
}

//como se fosse um "type"
//a variavel "tp" só pode receber os valores que existem no enum "tipoUsuario"
let tp: tipoUsuario = 1;

console.log("tp", tp);

//atribui o readonly a um objeto
const obj = {
  nome: "filipe",
  idade: 17,
} as const;
