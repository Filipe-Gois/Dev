
function converter() {

    let celsius1 = Number(prompt('Olá, informe a temperatura em graus celsius (°C):'))

    let k = celsius1 + 273.15

    let f = (celsius1 * 9 / 5) + 32


    document.getElementById('res').innerHTML = `<h1>A temperatura de ${celsius1}°C, corresponde a...</h1>
    <p>${k}°K (Kelvin)</p>
    <p>${f}°F (Fahrenheit)</p>`

}

function addEventos() {
    document.getElementById('btn').addEventListener("click", converter);
}

window.addEventListener("load", addEventos);