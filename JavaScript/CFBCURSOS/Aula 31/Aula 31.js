// getElementsByTagName: retorna uma coleção de elementos que usem aquela tag. Ex: div, a, button, etc.

let htmlCollectionDivs = document.getElementsByTagName("div");

//ou

//tira a necessidade da linha 11
// let htmlCollectionDivs = [...document.getElementsByTagName("div")];

//atribuindo o "array html" (html collection) para um array
htmlCollectionDivs = [...htmlCollectionDivs];

//alterando o conteudo do html
htmlCollectionDivs.map((elemento) => (elemento.innerHTML = `Filipe Góis`));

console.log(htmlCollectionDivs);
