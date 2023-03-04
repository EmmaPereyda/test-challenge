const calculator = require('./calculator');

test('suma de 2 numeros', () => {
    expect(calculator.sum(4, 6)).toBe(10);

})