function chamadaOral() {
    console.log('Alan, Gabriel, Renner, Gabrielle e Daniel')
}

chamadaOral()
chamadaOral()

function chamadaOralComArgs(listaDeAlunos) {
    console.log(listaDeAlunos)
}

// Para executar a função
chamadaOralComArgs('Alan, Gabriel, Renner, Gabrielle e Daniel')
chamadaOralComArgs('Alan, Gabrielle e Daniel')

function soma(num1, num2, num3) {
    console.log(num1 + num2 + num3)
}

soma(1, 1, 3)
soma(3, 3, 3)

function batizado(nome) {
    return nome
}

console.log(batizado('Alan'))

const alan = batizado('Alan') + ' Mareines'

console.log(alan)
