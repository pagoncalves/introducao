// const numeros = [1, 2, 3]

// numeros.push(4) // adiciona 4 no final do array => [1,2,3,4]

// numeros.pop() // remove o último elemento do array => [1,2,3]

// numeros.shift() // remove o primeiro elemento do array => [2,3]

// numeros.unshift(1, 2) // adiciona elementos no início do array => [1,2,2,3]

function removeUltimoAluno(array) {
    array.pop()
    return array
}

const sala = ['Alan', 'Bruno', 'Priscila', 'João']

console.log(removeUltimoAluno(sala))
