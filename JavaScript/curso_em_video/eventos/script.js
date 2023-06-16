
// primeiro passo criar as funções

function msg() {
    alert('oiooioioioiioi')
}

// function cor1() {
//     var x = document.getElementById('n1')
//     x.style.backgroundColor = '#fff';

// }

// function cor2 ()
// {
//     var x = document.getElementById('n1');
//     x.style.backgroundColor = '#f00'
// }


function cor(x, cor)
{
    x.style.backgroundColor = cor;
}










// segndo passo: adicionar os eventos


function addEventos() {

    // inicialização de eventos

    var x = document.getElementById("n1");
    x.addEventListener("click",msg);
    x.addEventListener("mouseover",cor1)
    x.addEventListener("mouseout",cor2)
}
// 'loud' só adiciona os eventos quando o conteúdo da página está carregado
window.addEventListener('load', addEventos);



// // achei mais complicado, prefiro usar a primeira
// function addEventos() {

//     // inicialização de eventos

//     var x = document.getElementById("n1");
//     x.addEventListener("click",msg);
//     x.addEventListener("mouseover",function(event){cor(x, "#fff")})
//     x.addEventListener("mouseout",function(event){cor(x, "#f00")})
// }
// window.addEventListener('load', addEventos);