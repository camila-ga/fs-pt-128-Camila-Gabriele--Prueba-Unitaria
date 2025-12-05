const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))




let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
// fromDollarToYen	monto en dólares	monto equivalente en yenes japoneses
// fromEuroToDollar	monto en euros	monto equivalente en dólares estadounidenses
// fromYenToPound	monto en yenes	monto equivalente en libras esterlinas

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(dollar){
    let valueInYen = dollar * 146.26;
    return valueInYen;
}

const fromYenToPound = function(yen){
    let valueInPound = yen * 0.00556;
    return valueInPound;
}
module.exports = { sum,fromEuroToDollar, fromDollarToYen, fromYenToPound };