let nome = "FIlipe Gois gois 2007"
let nomeGrande = "FIlipeeeeeeeeeeeeeeeeee Gois goiiiiiiiiisssssssssss gs 2007"
let email = "filipe@gmail.com"
let numeros = '1, 10, 100, 1000'

console.log(nome.search(/góis/i));

console.log(nome.match(/i/ig));

console.log(nome.replace(/góis/ig, "De Oliveira"));



//pega todos os caracteres "a" e "m"
console.log(nome.match(/[am]/ig));

//pega todos os caracteres de "a" até "m"
console.log(nome.match(/[a-g | h-z | 0-9 ]/ig));



//meta caracteres
console.log(nome.match(/\d/ig)); //numeros
console.log(nome.match(/\s/ig)); //espaços
console.log(nome.match(/\bF/ig)); //DWORD (caracter)


//quantificadores
console.log(nomeGrande.match(/e+| i+ |s+/ig)); //atribui caracteres seguidos como uma unica string
console.log(nomeGrande.match(/go*/ig)); //corresponde a 0 ou pelo menos uma string que corresponda

console.log(numeros.match(/10/ig));
console.log(numeros.match(/10+/ig));
console.log(numeros.match(/10*/ig));
console.log(numeros.match(/10?/ig));
