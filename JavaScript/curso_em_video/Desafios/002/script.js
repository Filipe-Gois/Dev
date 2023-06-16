var btn1 = document.querySelector('input#btn')

btn1.addEventListener('click', clicar);
// essa parte só tá funcionando com o evento no HTML :(




function clicar()
{
    let nome = prompt('Qual o seu nome ?')

    let idade = prompt('Qual a sua idade ?')

    alert(`Legal!! Acabei de conhcer o ${nome}, que tem ${idade} anos.   :)`);
}