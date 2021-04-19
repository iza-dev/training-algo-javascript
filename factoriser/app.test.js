import factoriser from './app'

test('factorisation d\'un calcul', ()=>{
    expect(factoriser(5)).toBe(120)
})