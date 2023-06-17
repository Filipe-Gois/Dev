function desconto() {
    let produto = prompt('Qual produto você está comprando ?')

    let preco = prompt('Informe o preço do produto:')

    let produtoComDesconto = preco * 0.9

    let desconto = preco * 0.1




    document.querySelector('.res').innerHTML = `<h1>Calculando 10% de desconto para ${produto}:</h1>
    <p>O preço original era de ${preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.</p>
    <p>Você acaba de ganhar ${desconto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} de desconto (-10%).</p>
    <p>Ao final da compra, você irá pagar ${produtoComDesconto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} no produto ${produto}.<p/>`
}

function addEventos() {
    document.getElementById('btn').addEventListener('click', desconto)
}
window.addEventListener('load', addEventos)