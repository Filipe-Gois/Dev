//generics: componente que pode funcionar com varios tipos. Alternativa ao any.

const teste = <T, U>(v: T, u: U): { v: T; u: U } => {
  return { v, u };
};

console.log(teste<boolean, string>(true, "fefe"));
console.log(teste<boolean, number>(true, 12));

class C_Teste<T> {
  valor: T;

  constructor(valor: T) {
    this.valor = valor;
  }
}

const c_1 = new C_Teste<number>(10);
const c_2 = new C_Teste<string>("10");

console.log(c_1.valor);
console.log(c_2.valor);
