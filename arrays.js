removendo ultimo numero na lista
const notas = [10 , 7, 8, 5 , 10]
notas.pop()

let media = (notas [0] +notas [1] + notas [2] + notas [3])/notas.length

console.log(`A Media dos Alunos são ${media}`)

removendo primeiro numero na lista
const notas =[10, 7, 8, 5, 10]
notas.shift(10)
console.log(notas)

let media = (notas[0] + notas[1] + notas[2] +notas[3] )/notas.length

console.log(`A media dos alunos é ${media}`)

adiciona numero na lista
const notas =[10 , 7 ,8 , 5]
notas.push(10)

console.log(notas)

let media =(notas[0] +notas[1] + notas[2] + notas[3] + notas[4])/notas.length

console.log(`A media dos alunos é ${media}`)

DIVIDINDO SALA
const nomes= ['Andre','Gustavo','Rodrigo','Ana','Felipe','Maria','Ellen','Joana','Sara','Douglas']
console.log(nomes.length)

const sala1 = nomes.slice([0],nomes.length/2)
const sala2 = nomes.slice(nomes.length/2)

console.log(`Os Alunos da Sala 1 são ${sala1}`)
console.log(`Os Alunos da Sala 2 São ${sala2}`)

Removendo e Adicionando=Alterando

const nomes =['Andre','Gustavo','Rodrigo','Ana']
nomes.splice(1,2,'Antonio','Alfred')

console.log(nomes)

