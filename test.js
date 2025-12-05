const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);
    expect(total).toBe(23);
});


test("One euro should be 1.07 dollars", function () {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("one dollar should be 146.26 japan yen", function () {
    const { fromDollarToYen } = require('./app.js');
    const dollars = fromDollarToYen(4);
    const expected = 4 * 146.26;
    expect(fromDollarToYen(8)).toBe(585.04);
})

test("one Japan Yen should be 0.00556 ", function () {
    const { fromYenToPound } = require('./app.js');
    const yen = fromYenToPound (15);
    const expected = 15 * 0.00556;
    expect(fromYenToPound(15)).toBe(0.0834);
})