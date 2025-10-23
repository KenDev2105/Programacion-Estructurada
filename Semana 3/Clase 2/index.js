import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// Suma de dos numeros
rl.question("Ingrese el primer numero ", (num1) => {
    rl.question("Ingrese el segundo numero ", (num2) => {
        console.log(`La suma de ${num1} y ${num2} es  ${parseFloat(num1) + parseFloat(num2)}`);
        // Celsius a Farenheit
        rl.question("Ingrese la temperatura en Celsius ", (celsius) => {
        let temParse = parseFloat(celsius);
        let fahrenheit = (temParse * 9/5)+32
            console.log(`La temperatura en Fahrenheit es ${fahrenheit}`)
            // Area rectangulo
            rl.question("Ingrese la base ", (base) => {
                rl.question("Ingrese la altura ", (altura) => {
                    let area = parseFloat(altura) * parseFloat(base)
                    console.log(`El area es  ${area}`);
        rl.close();
                })
            })
        });
    });
});

