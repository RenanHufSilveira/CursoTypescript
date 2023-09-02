console.log("INTERFACES")

interface PessoaInterface {
    nome: string
    idade?: number // Parametro opcional
    [prop: string]: any// Nome dinamico
    saudar(sobrenome: string): void
    saudarOpcional?(sobrenome: string): void //Função opcional
}

function dizerOla (pessoa: PessoaInterface) {
    console.log("Olá "+ pessoa.nome)
}

function mudarNome (pessoa: PessoaInterface) {
    pessoa.nome = "Joana"
}

const pessoa: PessoaInterface = {
    nome: "João",
    idade: 27,
    saudar(sobrenome: string) {
        console.log('Olá meu nome é '
        + this.nome + ' ' + sobrenome)
    }
}

dizerOla(pessoa)
mudarNome(pessoa)
dizerOla(pessoa)
pessoa.saudar('Silva')

class Cliente implements PessoaInterface {
    nome: string = ''
    idade: number = 35
    ultimaCompra: Date = new Date
    saudar(sobrenome: string) {
        console.log('Olá eu sou o cliente meu nome é '
        + this.nome + ' ' + sobrenome)
    }
}

const meuCliente = new Cliente();
meuCliente.nome = 'Roberto'
meuCliente.idade = 40
dizerOla(meuCliente)
meuCliente.saudar('Costa')
console.log(meuCliente.ultimaCompra)

// Interface Função
interface FuncaoCalculo {
    (a: number, b: number): number
}

let potencia: FuncaoCalculo
potencia = function(base: number, expoente: number): number {
    return Array(expoente).fill(base).reduce((t, a) => t * a)
}

console.log(potencia(3,10))
console.log(Math.pow(3,10))
console.log(3 ** 10)