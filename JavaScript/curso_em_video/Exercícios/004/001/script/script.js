alert(`Olá`)

function calcular()
{
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')

    for (let i = inicio.value; i < fim.value; passo.value) 
    {
        res.innerHTML = `aljnfdakjdfbkdsf`
        
    }

    
}









addEventos()
{
    document.getElementById('btn').addEventListener('click', calcular)
}
window.addEventListener('load', addEventos)