function clicar()
{
    let res1 = document.querySelector('div#res')
    let metros = Number(prompt('Informe a medida em metros para conversão:'))

    let km = metros/1000

    let hm = metros/100

    let dam = metros/10

    let dm = metros*10

    let cm = metros*100

    let mm = metros*1000

    res1.innerHTML = `<h3>A distância de ${metros} metros corresponde a...</h3>  <p>Kilômetros: ${km} (Km)</p> <p>Hectômetros: ${hm} (Hm)</p> <p>Decâmetros: ${dam} (Dam)</p> <p>Decímetros: ${dm} (Dm)</p> <p>Centímetros: ${cm} (Cm)</p> <p>Milimetros: ${mm} (Mm)</p>`

}