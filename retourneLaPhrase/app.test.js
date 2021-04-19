import retourneLaPhrase from './app'

test('mettre à l\'envers un string', () => {
    expect(retourneLaPhrase('bonjour')).toEqual('ruojnob')
})