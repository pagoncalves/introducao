// Complete essas funções somente com uma linha de código
// Caso não ache a função necessária para o tipo de dado que vc precisa, não se esqueça:
// O Google está aí para isso 🤓

function quantidadeDeElementos(arrayFicticio) {
    // TODO: retorne a quantidade de elementos de um arrayFicticio
    return arrayFicticio.length
}

function ordenarArray(arrayFicticio) {
    // TODO: retorne um array ordenado, de acordo com o esperado
    // E.x. ordenarArray([4,3,8,1]) => deve retornar: [1,3,4,8]
    // E.x. ordenarArray(["Bruno", "Camila", "Alan"]) => deve retornar: ["Alan", "Bruno", "Camila"]
    return arrayFicticio.sort()
}

function contemElemento(arrayFicticio, elemento) {
    // TODO: retorne true caso o elemento esteja presente no array
    // E.x. contemElemento([1,2,3], 3 ) => true // contemElemento([1,2,3], 4) => false
    return arrayFicticio.includes(elemento)
}

function fatia(arrayFicticio, tamanhoDaFatia) {
    // TODO: retorne uma fatia aleatória de tamanho fixo
    // E.x. fatia([1,2,3,4,5,6], 3) => [1,2,3]
    // E.x. fatia([1,2,3], 5) => false
    return tamanhoDaFatia > arrayFicticio.length?false:arrayFicticio.slice(0,tamanhoDaFatia)
}

function podeBeber(idade) {
    // TODO: retorne true se a pessoa pode beber bebidas alcoolicas
    // Retorne false caso a idade seja menor que 18 anos
    return idade >= 18
}

function somaDeElementos(arrayFicticio) {
    // TODO: retorne a soma de todos os elementos presentes no array
    // E.x. somaDeElementos([1,2,3]) => 6
    return arrayFicticio.reduce((ind, som) => ind + som)
}

function ordemDeChamada(listaDeAlunos) {
    // TODO: retorne uma string que representa uma lista de chamada dos alunos
    // Separe os alunos por "/" e indique o número do aluno por ordem
    // E.x. ordemDeChamada(["Alan", "Carlos", "Bruno"]) => "1 - Alan / 2 - Bruno / 3 - Carlos"
    return listaDeAlunos.forEach((nomes,i,listaDeAlunos) => { console.log(listaDeAlunos.sort().join(" / ")) } )

}


module.exports = {
    fatia,
    podeBeber,
    somaDeElementos,
    quantidadeDeElementos,
    ordenarArray,
    contemElemento,
    ordemDeChamada,
}
