function carregar() {
    
var msg = document.querySelector(`#msg`)
var img = document.querySelector(`#imagem`)
var data = new Date();
var hora = data.getHours();
// hora = 15;

hora > 1 ? msg.innerHTML = `Agora são ${hora} horas.` : msg.innerHTML = `Agora é ${hora} hora.`

if (hora == 0)
{
    msg.innerHTML = `Agora é meia noite.`
}




if (hora >= 0 && hora < 12)
{
    // DIA
    img.src = `img horários do dia/manhã.jpg`;
    document.body.style.background = `rgba(221 190 162)`;
}

else if (hora >= 12 && hora < 18)
    {
        // TARDE
        img.src = `img horários do dia/tarde.jpg`;
        document.body.style.background = `rgba(250 200 60)`;
    }

    else
    {
        // NOITE
        img.src = `img horários do dia/noite.jpg`;
        document.body.style.background = `rgba(2 26 56)`;
    }

}



function addEventos()
{
    // tentar achar um jeito de colocar o 'click' como 'load'
    document.querySelector('#body').addEventListener('load', carregar)
}

// não sei pq o 'click' deu certo, só sei que funciona kkkkkkkkkkkkk
window.addEventListener('click', addEventos);
