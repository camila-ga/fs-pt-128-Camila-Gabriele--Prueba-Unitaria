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
    let valueInYen = dollar * (oneEuroIs.JPY / oneEuroIs.USD);
    return valueInYen;
}
// console.log(fromDollarToYen(1));

// 1€ --------- 1.07 USD
// 1€ --------- 156.5 YEN
// entonces puedo hacer 156.5 / 1.07 : 146.26 YEN = 1USD

    
const fromYenToPound = function(yen){
   let valueInPound = yen * (oneEuroIs.GBP / oneEuroIs.JPY);
    return valueInPound;
}
// console.log(fromYenToPound(1));

//1€ ------- 0.87 POUND
//1€ ------- 156.5 YEN 
// entonces puedo hacer 0.87 / 156.5 : 0.00556 POUND = 1YEN
module.exports = { sum,fromEuroToDollar, fromDollarToYen, fromYenToPound };