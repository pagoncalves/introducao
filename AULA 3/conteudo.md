# JAVASCRIPT

## Tipos de dados primitivos

-   String - Exemplo: `"Alan Mareines"`

```javascript
const nome = 'Gabriel'
let nome2 = 'João'
const frase = 'Flamengo campeão'
```

-   Booleanos - Exemplo: `true` ou `false`

```javascript
let eGostoso = true
eGostoso = false
```

-   Números - Exemplo: `123`, `123.23`
    -   Inteiros - Exemplo: `1`
    -   Float (Decimais) - Exemplo `1.2`

```javascript
const numero = 2
let numero2 = 2.3

const resultado = numero + numero2
// resultado vai ser igual a 4.3
```

-   BigInt - Exemplo: `1232421421521512521`
-   Null - Exemplo: `null`

```javascript
let valor = null
```

-   undefined - Exemplo: `undefined`

```javascript
const aluno = undefined
let gabriel = undefined
gabriel = 'Gabriel'

let alan
// Quando nao atribuimos valor para uma variável, ela é UNDEFINED
```

## Tipos de dados composto/complexos/objetos

-   Funções

```javascript
function nomeDaFuncao() {
    // Código que irá ser executado toda vez que a função for chamada
    console.log('Alan, Gabriel, Renner, Gabrielle e Daniel')
}

// Se quiser rodar a função - execute com `()`

nomeDafuncao()
// Printa na tela 'Alan, Gabriel, Renner, Gabrielle e Daniel'
```

Toda função tem Parametros e Argumentos

```javascript
function chamadaOral(listaDeAlunos) {
    console.log(listaDeAlunos)
}

// Para executar a função
chamadaOral('Alan, Gabriel, Renner, Gabrielle e Daniel')
```

-   Array
-   Objetos (Ruby: Hashes, Python: Dicionários)
-   Erros
-   Sets
-   Classes

## Iniciando uma variável

```javascript
// NÀO USEM VAR, NUNCA.
var genero = 'Binário'

// Para variáveis que você prevê alterar, utilize let
let idade = 23

// Para constantes, utilize const
const aluno = 'Matheus'
```

## Como executar um arquivo Javascript (.js) ?

```bash

node <caminho_do_arquivo>

# e.x. node AULA\ 3/exemplo.js

```
