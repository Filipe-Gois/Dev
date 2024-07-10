//TUPLAS: array que pode definir tipos especificos para posições específicas dentro do array

let coisas: [string, number] = ["Filipe", 2];
//os itens são "adicionados", mas não é possivel acessa-los
coisas.push("se quiser", 3);
console.log(coisas);

//--------------
//conceito de readonly *qualquer variavel pode ser readonly*
// let coisas: readonly [string, number] = ["Filipe", 2];
