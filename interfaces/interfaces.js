"use strict";
console.log("INTERFACES");
function dizerOla(pessoa) {
    console.log("Olá " + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = "Joana";
}
const pessoa = {
    nome: "João",
    idade: 27,
    saudar(sobrenome) {
        console.log('Olá meu nome é '
            + this.nome + ' ' + sobrenome);
    }
};
dizerOla(pessoa);
mudarNome(pessoa);
dizerOla(pessoa);
pessoa.saudar('Silva');
class Cliente {
    constructor() {
        this.nome = '';
        this.idade = 35;
        this.ultimaCompra = new Date;
    }
    saudar(sobrenome) {
        console.log('Olá eu sou o cliente meu nome é '
            + this.nome + ' ' + sobrenome);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = 'Roberto';
meuCliente.idade = 40;
dizerOla(meuCliente);
meuCliente.saudar('Costa');
console.log(meuCliente.ultimaCompra);
let potencia;
potencia = function (base, expoente) {
    return Array(expoente).fill(base).reduce((t, a) => t * a);
};
console.log(potencia(3, 10));
console.log(Math.pow(3, 10));
console.log(3 ** 10);
