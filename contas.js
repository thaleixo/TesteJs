const forma = 'Quadrado'
const altura = 12;
const comprimento = 9;
let area;

if (area === 'Quadrado') {
   area = altura * comprimento ;

} else {
   area = altura * comprimento /2

}


let telefone = 0099849232 

console.log("O telefone é  " + String(telefone));

let cpf = 1234568438

//console.log("Seu cpf é " + String(cpf));

const idademinima = 18;
const idadecliente = 16;

if (idadecliente >= idademinima) {
   console.log("Cerveja,Pinga,Vodka")

} else {
   console.log("Suco,Refrigerante")

}

console.log(idadecliente >= idademinima ? "cerveja" : "suco" )



const nome= "Thiago"
//const idade= 17
const cidadedenascimento = "Sao paulo"

//const apresentaçao = `Meu Nome é ${nome}, Minha Idade é ${idade} Anos, minha cidade de nascimento é ${cidadedenascimento}`

//console.log(apresentaçao)


const bebidamenor = "suco"
const bebidamaior = "Cerveja"
const nomecliente = "Leo"
const idade = 17

const pedido = `${nomecliente} Disse : "Quero um pedido de um ${ idade >= 18 ? bebidamaior : bebidamenor}"`

console.log(pedido) 
