//obrigatorio usar function
//colocar * após o "function"
//é uma função que só é executada quando é chamada]

/*

Em JavaScript, funções geradoras (ou simplesmente "geradores") são um tipo especial de função que permite pausar e retomar a execução. Elas são definidas usando a sintaxe function* e podem produzir uma série de valores ao longo do tempo, em vez de calcular todos os valores de uma vez e retorná-los como uma lista.

Aqui está um resumo das principais características dos geradores:

Definição de um gerador: Uma função geradora é declarada com function* ao invés de function.

A palavra-chave yield: Dentro da função geradora, você usa a palavra-chave yield para pausar a execução da função e retornar um valor. Quando a função é chamada novamente, a execução continua de onde parou.

O objeto Iterator: Quando você chama uma função geradora, ela não executa imediatamente seu código. Em vez disso, ela retorna um objeto iterador. Esse objeto iterador possui um método chamado next que você pode chamar para continuar a execução da função até o próximo yield.

Iteração sobre geradores: Os geradores são iteráveis, o que significa que você pode usar loops for...of para iterar sobre os valores que eles produzem.


Em JavaScript, funções geradoras (ou simplesmente "geradores") são um tipo especial de função que permite pausar e retomar a execução. Elas são definidas usando a sintaxe function* e podem produzir uma série de valores ao longo do tempo, em vez de calcular todos os valores de uma vez e retorná-los como uma lista.

Aqui está um resumo das principais características dos geradores:

Definição de um gerador: Uma função geradora é declarada com function* ao invés de function.

A palavra-chave yield: Dentro da função geradora, você usa a palavra-chave yield para pausar a execução da função e retornar um valor. Quando a função é chamada novamente, a execução continua de onde parou.

O objeto Iterator: Quando você chama uma função geradora, ela não executa imediatamente seu código. Em vez disso, ela retorna um objeto iterador. Esse objeto iterador possui um método chamado next que você pode chamar para continuar a execução da função até o próximo yield.

Iteração sobre geradores: Os geradores são iteráveis, o que significa que você pode usar loops for...of para iterar sobre os valores que eles produzem.

Exemplo básico de uma função geradora
javascript
Copiar código
function* contador() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const gerador = contador();

console.log(gerador.next().value); // 0
console.log(gerador.next().value); // 1
console.log(gerador.next().value); // 2
// E assim por diante...
Neste exemplo:

A função geradora contador define um loop infinito que incrementa uma variável i.
A cada vez que a palavra-chave yield é encontrada, a execução da função é pausada e o valor de i é retornado.
Ao chamar gerador.next().value, a execução é retomada até o próximo yield.
Uso prático de geradores
Geradores são úteis em várias situações, como:

Produção de sequências infinitas: Como no exemplo do contador, onde a sequência de números pode ser infinita.
Manipulação de fluxos de dados: Onde os dados chegam em partes, como no caso de leitura de arquivos grandes ou streams de dados.
Controle de fluxo assíncrono: Em conjunto com Promises, os geradores podem ser usados para escrever código assíncrono de maneira mais síncrona, usando bibliotecas como co ou async/await (embora atualmente async/await seja mais comum).
*/

function* perguntas() {
  const nome = yield "Qual o seu nome ?";
  const esporte = yield "qual seu easporte favorito ?";
  return `Seu nome é ${nome}, seu esporte favorito é ${esporte}.`;
}

const iteradorPerguntas = perguntas();

console.log(iteradorPerguntas.next().value);
console.log(iteradorPerguntas.next("Filipe").value);
console.log(iteradorPerguntas.next("Basquete").value);

//-----

function* contador() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const gerador = contador();

console.log(gerador.next().value); // 0
console.log(gerador.next().value); // 1
console.log(gerador.next().value); // 2
// E assim por diante...
