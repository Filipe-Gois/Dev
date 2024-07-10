//FOR IN e FOR OF

let num = [10, 20, 30, 40, 50];

for (let index = 0; index < num.length; index++) {
  console.log(num[index]);
}

//n: é a posição do elemento do array
//mesma coisa que o FOR padrão
for (n in num) {
  console.log(num[n]);
}

//n: já é o elemento do array
//itera diretamente os elementos dentro da coleção
for (n of num) {
  console.log(n);
}
