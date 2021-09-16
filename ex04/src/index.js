function main() {
    // only change code below this line
        var myDecimal = 25.4;
        var MyDecimalE = myDecimal.toExponential(3);
    // only change code above this line
    return {
        myDecimal,
        MyDecimalE
    };
}

console.log(main());

module.exports = main;