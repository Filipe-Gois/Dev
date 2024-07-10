//diferenças entre NULL, UNDEFINED e UNKNOWN

//null: valor NULO, é de fato um valor. Usado para indicar que uma variavel tem valor "vazio"

//undefined: caso o valor da variavel nao exista. Tipo indefinido.

//unknown: tipo desconhecido. Só pode ser atribuido a variaveis do tipo unknown ou do tipo any

let vnome: string | null;
vnome = "Filipe";
console.log(vnome);

//"vNome3" TEM UM NUMBER, mas é do tipo "unknown"
// let vNome3: unknown = 10;
// let vNum: number = vNome3;
// console.log(vNum);
