# JAVASCRIPT

## Tipos de dados compostos

-   Array

Como declaramos um Array?

```js
const elemento = [1, 2, 3]
const arrayExemplo = ['elemento', 1, elemento]

arrayExemplo[0] // retorna 'elemento'
arrayExemplo[1] // retorna 1

const corredores = ["Leclerc", "Senna", ..., "Piquet"]
corredores[9]

const numeros = [1,2,3,4,5,6,7,8,9,10]
```

Mutações em arrays

```js
const numeros = [1, 2, 3]

numeros.push(4) // adiciona 4 no final do array => [1,2,3,4]

numeros.pop() // remove o último elemento do array => [1,2,3]

numeros.shift() // remove o primeiro elemento do array => [2,3]

numeros.unshift(1, 2) // adiciona elementos no início do array => [1,2,2,3]
```

-   Objetos

```js
const objeto = {
    chave1: 'Valor',
    chave2: 'Valor2',
    chave3: 'Valor3',
    chave4: 1,
    chave5: null,
    chave6: 'Piquet',
}

console.log(objeto.chave6)
```
