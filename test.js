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
    expect(dollars).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be 146.26 japan yen", function () {
    const { fromDollarToYen } = require('./app.js');
    const dollars = fromDollarToYen(55);
    const expected = 55 * 146.261682;
    expect(dollars).toBeCloseTo(expected);
})

test("One Japan Yen should be 0.00556 Pound ", function () {
    const { fromYenToPound } = require('./app.js');
    const yen = fromYenToPound (15);
    const expected = 15 * 0.00556;
    expect(yen).toBeCloseTo(expected);
})