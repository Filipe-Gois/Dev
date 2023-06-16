function comprar() {
    let btn1 = document.getElementById('btn-comprar')

    let nome = prompt('Informe o nome do produto:')

    let preco = parseFloat(prompt('Informe o preço do produto:'))

    let dinheiro = parseFloat(prompt('Quanto você deu ao caixa ?'))

    let troco = dinheiro - preco

    let divida = preco - dinheiro



    // utilização do operador ternário (ficou grande assim por conta da conversão de moeda)

    dinheiro >= preco ?
        alert(`Você comprou ${nome} que custou ${preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}. Deu ${dinheiro.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} em dinheiro e vai receber ${troco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} de troco`)

        : alert(`Você está devendo ${divida.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.`)




}