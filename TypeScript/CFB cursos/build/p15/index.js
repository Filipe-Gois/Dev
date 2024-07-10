"use strict";
const subtracao = (...nums) => nums.reduce((x, y) => x - y);
const soma15 = (...numeros) => numeros.reduce((x, y) => x + y);
const numerosAr = [1, 2, 3, 4, 5];
console.log(subtracao(...numerosAr));
console.log(soma15(...numerosAr));
