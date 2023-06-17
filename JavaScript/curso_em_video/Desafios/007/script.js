var cotacao = Number(prompt('Informe a cotação atual do dólar:'))


function converter()
{
    let carteira = Number(prompt('Informe quantos R$ deseja converter:'));

    let dolar = carteira / cotacao

    document.getElementById('res').innerHTML = `<p>Desses ${carteira.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}, você tem ${dolar.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})}.</p>`

    
    
}

function addEventos()
{
    document.getElementById('btn').addEventListener('click', converter)
}
window.addEventListener('load', addEventos)