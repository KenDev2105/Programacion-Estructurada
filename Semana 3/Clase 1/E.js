// Importar modulo
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// **Ejercicios

// Ciudad - Usuario
rl.question('¿Dónde vives? ', (city) => {
    console.log(`Vives en ${city}!`);
    // Color Favorito
    rl.question('¿Cuál es tu color favorito? ', (color) => {
        console.log(`Tu color favorito es ${color}!`);
        // Dos Palabras
        rl.question('Dame una palabra: ', (word1) => {
            rl.question('Dame otra palabra: ', (word2) => {
                console.log(`${word1} ${word2}`);
                rl.close();
            });
        });
    });
});
