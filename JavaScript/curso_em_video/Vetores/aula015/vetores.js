let num = [5,8,4]


// adicionar valor "6" no índice 3:
num[3] = 6


// adicionar valor na última posição:
num.push(7)

// Como saber quantos itens existem dentro do array:
// console.log(`O vetor tem ${num.length} posições`)



// console.log(num)
// console.log(`O vetor tem ${num.length} posições`)
// console.log(`O primeiro valor do vetor é: ${num[0]}`)



// console.log(`Nosso vetor é o ${num}`)


// oganizar os valores em ordem crescente:
num.sort()


// como exibir o vetor:
// for (let i = 0; i < num.length; i++) {
//     console.log(`A posição ${i} tem o valor: ${num[i]}`)
    
// }



// forin (método mais fácil para exibir, só funciona objetos):

for (let i in num) {
    console.log(`A posição ${i} tem o valor: ${num[i]}`)
}




// como buscar um valor dentro do vetor:
// num.indexOf(7) tem o valor "7" ? Tem, e está na posição []
// num.indexOf(1) tem o valor "7" ? Náo tem, (retorna o valor -1, indicando que n tem)

let pos = num.indexOf(7)

pos == -1 ? console.log(`O valor não existe`) : console.log(`O valor está na posição ${pos}`)

