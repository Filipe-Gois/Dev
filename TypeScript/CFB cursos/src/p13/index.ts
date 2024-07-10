//Parâmetros Padrões e Opcionais

//valor padrao
const soma = (n1: number = 0, n2: number = 0): number => {
  return n1 + n2;
};

console.log(soma(5));

//valor opcional: colocar "?" na frente da variavel. Caso o parametro nao seja informado na chamada da função, será UNDEFINED
const novoUser = (user: string, pass: string, nome?: string): void =>
  console.log(`User: ${user}, Senha: ${pass} ${nome ? `, Nome: ${nome}` : ""}`);

novoUser("F@f.com", "123");
