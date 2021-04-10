import conversion from './app.js'

test('Convertir des derés celsius en degrés Fahrenheit', () => {
    expect(conversion(50)).toBe(122)
    
})