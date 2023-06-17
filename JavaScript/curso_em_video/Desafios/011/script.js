function verificar() {
    let txt = document.querySelector('.res')
    let conteudo = document.querySelector('.conteudo')
    let ano = Number(prompt('Informe o ano que deseja verificar:'))


    txt.innerHTML = `<h3>Analisando o ano de ${ano}...</h3>`

    if (ano % 4 == 0) {

        conteudo.innerHTML = `<p>O ano de ${ano} é bissexto &#x2713 </p>`
    }

    else
    {
        conteudo.innerHTML = `<p>O ano de ${ano} não é bissexto &#x1F5D9 </p>`
    }
}







function addEventos() {
    document.querySelector('#btn').addEventListener('click', verificar)
}
window.addEventListener('load', addEventos)