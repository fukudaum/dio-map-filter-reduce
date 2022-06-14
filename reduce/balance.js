// Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.

const array = [1000, 2000, 30, 40, 50, 600, 70, 800];

let balance = 6000;
let finalBalance = array.reduce(function (acc, cur) {
    return acc - cur;
}, balance);

console.log(finalBalance);