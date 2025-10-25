const hello = require('../src/app');

test('Devuelve "Hola Mundo"', () => {
    expect(hello()).toBe("Hola Mundo");
});
