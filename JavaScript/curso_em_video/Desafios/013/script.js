function notas() {
    let h3 = document.querySelector('.h3')
    let p2 = document.querySelector('.p2')
    let p3 = document.querySelector('.p3')

    let nome = prompt('Informe o nome do aluno:')

    let nota1 = Number(prompt('Informe a primeira nota de ${nome}'))
    let nota2 = Number(prompt('Informe a segunda nota de ${nome}'))

    let media = (nota1 + nota2) / 2


    h3.innerHTML = `Analisando a situação de ${nome}:`
    p2.innerHTML = `Com as notas ${nota1} e ${nota2}, a <strong>média é ${media}.</strong>`


    if (media >= 6) {
        p3.innerHTML = `Com média acima de 6.0, o aluno está <strong>APROVADO</strong>!`
    }

    else if (media >= 3 && media < 6) {
        p3.innerHTML = `Com média entre 3 e 6, o aluno está em <strong>RECUPERAÇÃO</strong>`
    }

    else {
        p3.innerHTML = `Com média abaixo de 3, o aluno está <strong>REPROVADO</strong>`
    }





    // switch (media) {
    //     case media >= 6:
    //         p3.innerHTML = `Com média acima de 6.0, o aluno está <strong>APROVADO</strong>!`
    //         break;
    //     case media >= 3 && media < 6:
    //         p3.innerHTML = `Com média entre 3 e 6, o aluno está em <strong>RECUPERAÇÃO</strong>`
    //         break;
    //     case media < 3:
    //         p3.innerHTML = p3.innerHTML = `Com média abaixo de 3, o aluno está <strong>REPROVADO</strong>`
    //         break;

    //     default:
    //         break;
    // }
}

function addEventos() {
    document.querySelector('#btn').addEventListener('click', notas);
}
window.addEventListener('load', addEventos);