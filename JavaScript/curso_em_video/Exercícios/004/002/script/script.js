function tabuada() {
    let numero = document.getElementById('numero')
    let tab = document.getElementById('select-tab')


    if (numero.value.length == 0) {

        window.alert('Insira um número')
    }

    else {

        let n = Number(numero.value)
        let i = 1

        tab.innerHTML = ""

        for (i; i <= 10; i++) {
            let resultado = n * i
            let item = document.createElement('option')

            item.text = `${n} X ${i} = ${resultado}`
            item.value = `tab${i}`
            tab.appendChild(item)

        }
    }

}




addEventos()
{
    document.getElementById('btn').addEventListener('click', tabuada)
}
window.addEventListener('load', addEventos)