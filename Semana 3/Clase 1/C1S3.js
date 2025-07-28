// Importar modulo
import readline from 'readline';

// Crear interfaz
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Preguntar al usuario     
// rl.question('¿Como te llamas? ', (name) => {
//     console.log(`Hola ${name}!`);
//     rl.close();
// });

rl.question('¿Cuál es tu nombre? ', (name) => {
    rl.question('¿Cuál es tu apellido? ', (lastname) => {
        rl.question('¿Cuál es tu DUI? ', (DUI) => {
        console.log(`Hola ${name} ${lastname}! ${DUI}`);
        rl.close();
        });
    });
});








