//tsc -w
console.log("TIPOS")
//String
let nome = 'João'
console.log('Nome: ' +nome)

/* Nesse caso gera erro porque o compilador automaticamente 
atribui o tipo string para a variavel nome*/
//nome = 28

//Numbers

let idade = 27
console.log('Idade: ' +idade)

idade = 27.5
console.log('Idade: ' +idade)

//Boolean
let finalizado = false
console.log("Foi finalizado: " + finalizado)

finalizado = true
console.log("Foi finalizado: " + finalizado)

// Tipos explicitos
/* 
Se declarar a variavel sem iniciar valor o tipo dela não é
implicito então você poderá colocar qualquer valor nela

Para definir um tipo basta colocar 
let minhaIdade: number
let minhaIdade: string
let minhaIdade: boolean
*/
let minhaIdade: any
minhaIdade = 29
console.log("Tipo da variavel minhaIdade: "+ typeof minhaIdade)

minhaIdade = 'Idade é 30'
console.log("Tipo da variavel minhaIdade: "+ typeof minhaIdade)

//Array
let hobbies: any[] = ["Cozinhar", "Academia", "Trabalhar"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100,50,20]
console.log(hobbies)
console.log(typeof hobbies)

//Tuplas
//Com isso podemos definir padrão das informações que devemos receber
let endereco: [string, number, string] = ["Avenida Brasil", 991, "Casa azul"]
console.log(endereco)

endereco = ["Rua Piaui", 100, "Predio branco"]
console.log(endereco)

//Enums
//Estrutura que podemos definir valores como dias da semana seg, ter, qua, ..
enum Cor {
    Cinza, // 0
    Verde, // 1
    Azul   // 2
}
let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

enum CorComValor {
    Cinza = 50, 
    Verde = 100, 
    Azul,
    Vermelho = 200
}

let minhaCorValor: CorComValor = CorComValor.Verde
console.log(minhaCorValor)

minhaCorValor = CorComValor.Azul
console.log(minhaCorValor)

minhaCorValor = CorComValor.Vermelho
console.log(minhaCorValor)

//Any
let carro: any = "Fiat"
console.log(carro)
carro = {marca: "Fiat", modelo:"Uno", ano: 2006}
console.log(carro)
