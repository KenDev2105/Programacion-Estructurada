// 2. Solicitar al usuario tres números y calcula el promedio
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numeros = []

rl.question("Ingresa el primer numero ", (num1) => {
    numeros[0] = parseInt(num1)
    rl.question("Ingresa el segundo numero ", (num2) => {
        numeros[1] = parseInt(num2)
        rl.question("Ingresa el tercer numero ", (num3) => {
            numeros[2] = parseInt(num3)

            const promedio = (numeros[0] + numeros[1] + numeros[2])/numeros.length

            console.log(promedio)
            rl.close()
        })
    })
})