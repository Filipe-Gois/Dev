function calcular() {
    let a = Number(prompt('Informe o valor de a:'));
    let b = Number(prompt('Informe o valor de b:'));
    let c = Number(prompt('Informe o valor de c:'));

    let delta = (b ** 2) - 4 * a * c;

    document.querySelector('.res').innerHTML = `<p>A equação atual é ${a}x<sup>2</sup> + ${b}x + ${c} = 0 </p>

    <p>O cálculo realizado será: &Delta; = ${b}<sup>2</sup> - 4 . ${a} . ${c} </p>

    <p>O valor calculado foi &Delta; = ${delta} </p>`;
}


function addEventos() {
    document.querySelector('#btn').addEventListener('click', calcular);
}

window.addEventListener('load', addEventos);