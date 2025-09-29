// Solicitar al usuario tres nombres para guardarlos en un array
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let nombres = []

rl.question("Ingresa el primer nombre ", (a) => {
    nombres.push(a)

    rl.question("Ingrese el segundo nombre ", (b) => {
        nombres.push(b)

        rl.question("Ingrese el tercer numero ", (c) => {
            nombres.push(c)

            console.log(nombres)
            rl.close()
        })
    })
})

