// 5! = 5.4.3.2.1

// método traicional

function fatorial(n)
{
    let fat = 1

    for (let i = n; i > 1; i--) {
        fat*= i
        
    }
    return fat
}

console.log(fatorial(5))