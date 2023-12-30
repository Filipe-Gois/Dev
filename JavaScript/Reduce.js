let arr = [1, 2, 3, 4, 5,]
let ant = []
let atualArr = []

// previousValue = valor Anterior  (n é o valor anterior do array)
// currentValue = valor atual
// currentIndex = posicao atual do valor que tá sendo iterado
// array = qual array está sendo iterado

let resultado = arr.reduce((anterior, atual, posicao) => {
    ant.push(anterior)
    ant.push(anterior)
    return atual + anterior
})


console.log(resultado);