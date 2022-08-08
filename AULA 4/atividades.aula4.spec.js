const funcoes = require('./atividades.aula4')

test('Deve retornar quantidade de elementos', () => {
    expect(funcoes.quantidadeDeElementos([1, 2, 3, 4])).toBe(4)
})

test('Deve retornar um array ordenado', () => {
    expect(funcoes.ordenarArray([4, 3, 8, 1])).toEqual([1, 3, 4, 8])
    expect(funcoes.ordenarArray(['Bruno', 'Camila', 'Alan'])).toEqual([
        'Alan',
        'Bruno',
        'Camila',
    ])
})

test('Deve retornar true caso o elemento exista no array', () => {
    expect(funcoes.contemElemento([1, 2, 3], 3)).toEqual(true)
})
test('Deve retornar false caso o elemento não exista no array', () => {
    expect(funcoes.contemElemento([1, 2, 3], 4)).toEqual(false)
})

test('Deve uma fatia do array do tamanho apontado', () => {
    expect(funcoes.fatia([1, 2, 3, 4, 5, 6], 3).length).toEqual(3)
    expect(funcoes.fatia([1, 2, 3, 4, 5, 6], 4).length).toEqual(4)
    expect(funcoes.fatia([1, 2, 3], 4)).toEqual(false)
})

test('Deve retornar true se a idade é maior que 18', () => {
    expect(funcoes.podeBeber(18)).toEqual(true)
    expect(funcoes.podeBeber(21)).toEqual(true)
})

test('Deve retornar false se a idade é menor que 18', () => {
    expect(funcoes.podeBeber(16)).toEqual(false)
})

test('Deve retornar a soma dos elementos do array', () => {
    expect(funcoes.somaDeElementos([1, 2, 3])).toEqual(6)
    expect(funcoes.somaDeElementos([4, 3, 2, 1])).toEqual(10)
    expect(funcoes.somaDeElementos(['Lina', 'Academy'])).toEqual('LinaAcademy')
})

test('Deve retornar a lista de alunos em ordem, no formato apontado', () => {
    expect(funcoes.ordemDeChamada(['Alan', 'Carlos', 'Bruno'])).toEqual(
        '1 - Alan / 2 - Bruno / 3 - Carlos'
    )
})
