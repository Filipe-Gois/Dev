function soma(n1, n2)
{
    return n1 + n2
}

console.log(Number(soma(2,5)))


// coloca-se esse "=0" caso algum parâmetro não seja informado
function soma(n1=0, n2=0)
{
    return n1 + n2
}

console.log(Number(soma(2,5)))