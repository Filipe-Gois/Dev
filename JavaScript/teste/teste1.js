const readline = require('readline');
const rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout,
    })

    let nome

rl.question('Qual o seu nome ?', nome)
console.log(`OIOI, ${nome}`)