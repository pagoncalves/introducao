const funcoes = require('./funcoesTiposCompostos')

test('Deve retornar o primeiro item do array', () => {
    expect(funcoes.fatia([1, 2, 3, 4, 5])).toBe(1)
    expect(funcoes.fatia(['Aluno 1', 'Aluno 2', 'Aluno 3'])).toBe('Aluno 1')
})

test('Deve retornar uma fatia do tamanho indicado', () => {
    const result = funcoes.fatia([1, 2, 3, 4, 5], 3)
    expect(result.length).toBe(3)
})

test('Deve retornar um Array ordenado', () => {
    expect(funcoes.ordernar([1, 5, 2, 3])).toEqual([1, 2, 3, 5])
    expect(funcoes.ordernar([1, 2, 5, 4, 3])).toEqual([1, 2, 3, 4, 5])
    expect(funcoes.ordernar(['A', 'C', 'B'])).toEqual(['A', 'B', 'C'])
})
