//Aprendendo sobre conversões de JSON e Objetos

const pessoa = {
  nome: "Filipe",
  nacionalidade: "Brasileiro",
  status: { idade: 17, altura: 1.7, peso: 60 },
};

//converter objeto literal em json

const objetoParaJson = JSON.stringify(pessoa);

console.log("objetoParaJson", objetoParaJson);

//converter json em objeto literal

const jsonParaObjeto = JSON.parse(objetoParaJson);

console.log("jsonParaObjeto", jsonParaObjeto);
