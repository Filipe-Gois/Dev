"use strict";
const soma = (n1 = 0, n2 = 0) => {
    return n1 + n2;
};
console.log(soma(5));
const novoUser = (user, pass, nome) => console.log(`User: ${user}, Senha: ${pass} ${nome ? `, Nome: ${nome}` : ""}`);
novoUser("F@f.com", "123");
