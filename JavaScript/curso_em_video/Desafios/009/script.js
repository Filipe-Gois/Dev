function reajuste() {
    let nome = prompt('Informe seu nome:');

    let salario = Number(prompt(`Informe o salário de ${nome}:`));

    let aumentoPorcentagem = Number(prompt(`Informe a porcentagem de aumento do salário de ${nome}:`));

    let valorDoDesconto = (salario * aumentoPorcentagem) / 100;
    // quantia de dinheiro aumentada

    let salarioFinal = valorDoDesconto + salario;

    document.querySelector('.res').innerHTML = `<h1>${nome} recebeu um aumento salarial!</h1>
    <p>O salário atual era de ${salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.</p>
    <p>Com um aumento de ${aumentoPorcentagem}%, o salário vai aumentar ${valorDoDesconto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} no próximo mês.</p>
    <p>E a partir daí, ${nome} vai passar a ganhar ${salarioFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.</p>`

}

function addEventos() {
    document.querySelector('#btn').addEventListener('click', reajuste)
}

window.addEventListener('load', addEventos);