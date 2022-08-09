O que já aprendemos?

```js
const string = 'String'

const string2 = 'String2'

const number = 1

const number2 = 1.32

const bol = true

const bol2 = false

const naosei = undefined

const nulo = null

const array = ['Alan', 'lojas Renner']

// Como acessar o primeiro item do array?
array[0] // => "Alan"
array[1] // => "lojas Renner"

const array2 = ['Alan', 'lojas Renner', 2, 3, 2.4, false]

const array3 = [1]
```

Métodos de arrays (iterações)

`Iteração - ato de iterar; repetição.`

```js
const array = [1, 2, 3, 4, 5, 6]

// printe na tela todos os elementos do array de forma manual

console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[4])
console.log(array[5])

// printe na tela todos os elementos do array com métodos iterativos

array.forEach(function (item, indice) {
    console.log(indice, item)
})

const alunos = ['Alan', 'Bruno', 'Harry Potter'] // 90000
const idade = [32, 21, 42] // 90000

console.log('Aluno Alan - Idade 32')
console.log('Aluno Bruno - Idade 21')
console.log('Aluno Harry Potter - Idade 42')

alunos.forEach((item, indice) => {
    console.log(item, '-', idade[indice])
})
```

## OBJETOS

```js
const objeto = {}

const objeto2 = { Alan: 32, Bruno: 21, 'Harry Potter': 42 } // 90000

console.log(objeto2.Alan) // 32
console.log(objeto2['Harry Potter']) // 42

// String que foi inputada pelo usuário

const nome = 'Alan Mareines'

const nomeNormatizado = nome.toLowerCase().replaceAll(' ', '')

const objeto = { aluno1: nomeNormatizado }

console.log(objeto)

const dicionario = {a: "Descrição"...., "Iteração": "Iteração - ato de iterar; repetição."}

dicionario['Iteração'] // "Iteração - ato de iterar; repetição."
```

## Tipos complexos dentro de Tipos complexos

```js
const arrayDeArrays = [1, 2, 3, ['A', 'B', 'C']]

console.log(arrayDeArrays[3]) // ['A', 'B', 'C']

console.log(arrayDeArrays[3][1]) // 'B'

const arrayDeObjetos = [1, 2, 3, { aluno: 'Alan', aluno2: 'Gabrielle' }]

console.log(arrayDeObjetos[3]) // { aluno: 'Alan', aluno2: 'Gabrielle' }

console.log(arrayDeObjetos[3].aluno) // 'Alan'

const objetoDeObjetos = { aluno: { nome: 'Alan', sobrenome: 'Mareines' } }

console.log(objetoDeObjetos.aluno) // { nome: 'Alan', sobrenome: 'Mareines' }

console.log(objetoDeObjetos.aluno.nome) // 'Alan'

console.log(objetoDeObjetos.aluno.nome, objetoDeObjetos.aluno.sobrenome) // 'Alan Mareines'

const objetoDeListas = {
    alunos: ['Alan', 'Daniel', 'Gabriel', 'Gabrielle', 'Patricia'],
    professores: [
        { nome: 'Profesor Girafalles', colegio: 'CEE Chaves' },
        { nome: 'Profesora Dona Florinda', colegio: 'Vila do Chaves' },
    ],
    monitores: { unidade1: ['Monitor1'], unidade2: ['Monitor1', 'Monitor2'] },
}

console.log(objetoDeListas.alunos) // ['Alan', 'Daniel', 'Gabriel', 'Gabrielle', 'Patricia']

console.log(objetoDeListas.professores[1].nome) // Professora Dona Florinda

console.log(objetoDeListas.monitores.unidade2[1]) // Monitor2
```

## COMO RODAR OS TESTES PARA AULA 5

`npm test -- AULA\ 5/atividades.aula5.spec.js`
