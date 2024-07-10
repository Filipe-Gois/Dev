//querySelectorAll: retorna uma coleção com todos os elementos
//querySelector: retorna o primeiro elemento da chave que voce especificar

//nodeList: mesma coisa que o html collection, porém alguns navegadores n reconhecem o html collection

const queryPrimeiraDiv = document.querySelector("div");

const queryTodasAsDivs = [...document.querySelectorAll("div")];

const queryPrimeiroTeste = document.querySelector(".teste");
//armazena todos os elementos que utilizarem a class "teste"
const queryTodosOsTestes = [...document.querySelectorAll(".teste")];

//mesma coisa pro ID, mas precisa colocar #

console.log(queryTodosOsTestes);

//dá pra passar mais de um elemento como parametro no queryselector

const divsEParagrafos = [...document.querySelectorAll("#l1, #l2, #l3")];

console.log(divsEParagrafos);

//-----------

//filtrar elementos ao retorna-los

const divsQueContemClass = [...document.querySelectorAll("div[class]")];

console.log(divsQueContemClass);

//retornar somente divs que contem um elemento p dentro

const divsQueContemParagrafos = [...document.querySelectorAll("div > p")];

console.log(divsQueContemParagrafos);
