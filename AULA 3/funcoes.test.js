const axios = require('axios')
const funcoes = require('./funcoes')

test('Deve retornar um boleano', () => {
    expect(
        funcoes.primeiraFuncao() === false || funcoes.primeiraFuncao() === true
    ).toBeTruthy()
})

test('Deve retornar um valor', () => {
    expect(funcoes.myGithubUsername()).toBeDefined()
    expect(funcoes.myGithubUsername()).not.toBe('')
})

test('Deve retornar um usuário Github válido', async () => {
    const response = await axios.get(
        `https://github.com/${funcoes.myGithubUsername() || 'undefined'}`
    )
    expect(response.status).toBe(200)
})

test('Deve remover todos os espaços extras', () => {
    expect(funcoes.tchauEspacosEmBranco('     oi    ')).toBe('oi')
    expect(funcoes.tchauEspacosEmBranco('  tchau')).toBe('tchau')
    expect(funcoes.tchauEspacosEmBranco('sim   ')).toBe('sim')
    expect(funcoes.tchauEspacosEmBranco('Não tirar espaços em frases')).toBe(
        'Não tirar espaços em frases'
    )
})

test('Deve retornar a String em maiúsculo', () => {
    expect(funcoes.tudoMaiusculo('linaAcademy')).toBe('LINAACADEMY')
    expect(funcoes.tudoMaiusculo('Fase grande e aleatória')).toBe(
        'FASE GRANDE E ALEATÓRIA'
    )
})

test('Deve retornar a String em minúsculo', () => {
    expect(funcoes.tudoMinusculo('EUTOEMOCIONADO')).toBe('eutoemocionado')
    expect(funcoes.tudoMinusculo('EU TO EMOCIONADO')).toBe('eu to emocionado')
})

test('Deve retornar true se a frase contém a palavra', () => {
    expect(funcoes.fazParte('Uma frase muito longa e complexa.', 'longa')).toBe(
        true
    )
})

test('Deve retornar false se a frase NÃO contém a palavra', () => {
    expect(funcoes.fazParte('Uma frase muito longa e complexa.', 'oi')).toBe(
        false
    )
})

test('Deve substituir os caractéres', () => {
    expect(funcoes.substituicao('Lina', 'a', 'o')).toBe('Lino')
    expect(funcoes.substituicao('falar', 'f', 't')).toBe('tapar')
    expect(funcoes.substituicao('Rio de Janeiro', 'o', 'a')).toBe(
        'Ria de Janeira'
    )
})

test('Deve retornar os valores multiplicados', () => {
    expect(funcoes.multiplicacao(2, 3)).toBe(6)
    expect(funcoes.multiplicacao(-2, 3)).toBe(-6)
})

test('Deve repetir a String de acordo com os argumentos', () => {
    expect(funcoes.papagaio('Como estamos?', 3)).toBe(
        'Como estamos?Como estamos?Como estamos?'
    )
})
