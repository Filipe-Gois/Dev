function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.getElementById('txt-ano')
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    // declarando id para a img
    img.setAttribute('id', 'foto')

    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('Verifique os dados e digite novamente')
    }

    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        // res.innerHTML = `Idade: ${idade}` -----  teste
        var genero = ``
        if (fsex[0].checked) {
            genero = `Homem`

            if (idade >= 0 && idade < 10) {
                // criança

                img.setAttribute(`src`, `assets/img/cm.jpg`)
            }
            else if (idade < 21) {
                // jovem
                img.setAttribute(`src`, `assets/img/jm.jpg`)
            }

            else if (idade < 50) {
                // adulto
                img.setAttribute(`src`, `assets/img/am.jpg`)
            }

            else {
                // idoso
                img.setAttribute(`src`, `assets/img/im.jpg`)
            }
        }

        else if (fsex[1].checked) {
            genero = `Mulher`

            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute(`src`, `assets/img/cf.jpg`)
            }
            else if (idade < 21) {
                // jovem
                img.setAttribute(`src`, `assets/img/jf.jpg`)
            }

            else if (idade < 50) {
                // adulto
                img.setAttribute(`src`, `assets/img/af.jpg`)
            }

            else {
                // idoso
                img.setAttribute(`src`, `assets/img/if.jpg`)
            }
        }
        res.style.textAlign = `Center`
        res.innerHTML = `Detectamos: ${genero} com ${idade} anos.`
        res.appendChild(img);
    }
}




function addEventos() {
    document.getElementById('verificar-btn').addEventListener('click', verificar)
}
window.addEventListener('load', addEventos);