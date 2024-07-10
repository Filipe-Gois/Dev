"use strict";
function somarFunction(n1, n2) {
    return n1 + n2;
}
const somarArrowFunction = (...numeros) => numeros.reduce((x, y) => x + y);
console.log(somarArrowFunction(1, 2, 3, 4, 5));
