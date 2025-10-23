import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Notas
rl.question("Ingrese la primera nota ", (nota1) => {
    rl.question("Ingrese la segunda nota ", (nota2) => {
        rl.question("Ingrese la tercer nota ", (nota3) => {
            let prom = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3
            console.log(`Su promedio de notas es:  ${prom}`);
            // Kilometros decimales
            rl.question("Ingrese una cantidad de kilometros en decimal ", (km) => {
                let mill = parseFloat(km) / 1.6
                console.log(`Sus ${km}km equivalen a ${mill.toFixed(2)}mill`) 
                // Total compra
                rl.question("Ingrese el precio individual del producto ", (unit) => {
                    rl.question("Ingrese la cantidad de articulos que compro ", (artNum) => {
                        let total = parseFloat(unit) * parseInt(artNum)
                        console.log(`Su total es $${total}`);
                        rl.close();
                    });
                });
            });
        });
    });
});