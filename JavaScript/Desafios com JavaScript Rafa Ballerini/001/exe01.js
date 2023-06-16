// Dia 1

// Exercício
// Hoje iremos começar de uma forma tranquila, porém com um aprendizado bastante importante para seguirmos pros próximos dias de desafios!

// Caso você ainda não tenha passado por isso, é muito comum ao utilizarmos Javascript termos problemas com os tipos de variáveis na hora de atribuirmos novos valores e os comparar

// Sendo assim, você irá reescrever o código abaixo de maneira que ele esteja imprimindo as informações de maneira correta, que faça sentido e sem erros:

let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

// if (numeroUm = stringUm) {
//   console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
// } else {
//   console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
// }

// if (numeroTrinta == stringTrinta) {
//   console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
// } else {
//   console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
// }

// if (numeroDez === stringDez) {
//   console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
// } else {
//   console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
// }


// Correção



numeroUm == stringUm ? console.log("As variáveis numeroUm e stringUm têm o mesmo valor, mas tipos diferentes") : console.log("As variáveis numeroUm e stringUm não têm o mesmo valor")

// 

numeroTrinta === stringTrinta ? console.log("As variáveis numeroTrinta e stringTrinta têm o mesmo valor e mesmo tipo") : console.log("As variáveis numeroTrinta e stringTrinta não têm o mesmo tipo")

// 

numeroDez == stringDez ? console.log('As variáveis numeroDez e stringDez têm o mesmo valor, mas tipos diferentes') : console.log('As variáveis numeroDez e stringDez não têm o mesmo valor')