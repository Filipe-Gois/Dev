function verificar()
{
    let p1 = document.querySelector('#p1')
    let p2 = document.querySelector('#p2')
    let p3 = document.querySelector('#p3')


    let precoAnterior = Number(prompt('Informe o preço anterior do produto:'))
    let precoAtual = Number(prompt('Informe o preço atual do preoduto:'))


    let subiu = precoAtual - precoAnterior
    let caiu = precoAnterior - precoAtual

    let aumentoPorcentagem = (subiu / precoAnterior) * 100

    let descontoPorcentagem = (caiu * 100) / precoAnterior


    p1.innerHTML = `<h3>Analisando os valores informados:</h3>`

    p2.innerHTML = `<p>O produto custava ${precoAnterior.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} e agora custa ${precoAtual.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>`

    if (precoAnterior < precoAtual)
    {
        p3.innerHTML = `<p>Hoje o produto está mais caro.</p>
        <p>O preço subiu ${subiu.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} em relação ao preço anterior.</p>
        <p>Uma variação de ${aumentoPorcentagem}% pra cima</p>`
    }

    else
    {
        p3.innerHTML = `<p>Hoje o produto está mais barato.</p>
        <p>O preço caiu ${caiu.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} em relação ao preço anterior.</p>
        <p>Uma variação de ${descontoPorcentagem}% pra baixo</p>`
    }
}



function addEventos()
{
    document.querySelector('#btn').addEventListener('click', verificar)
}
window.addEventListener('load', addEventos)