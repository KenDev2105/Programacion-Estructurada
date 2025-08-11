import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese una frase ", (frase) => {
    console.log(`\n === Tratamiendo de cadenas ===`);

    // Length
    const fraseLength = frase.length;
    console.log(`La frase tiene ${fraseLength} caracteres`);

    // toUpperCase
    const fraseMayus = frase.toUpperCase();
    console.log(`La frase en mayusculas es: ${fraseMayus}`);
    rl.close();

    // toLowerCase
    const fraseMinus = frase.toLowerCase();
    console.log(`La frase en minusculas es: ${fraseMinus}`);

    // Trim
    const fraseTrim = frase.trim();
    console.log(`La frase sin espacios es: ${fraseTrim}`);

    // substring
    const fraseSub = frase.substring(0, 4);
    console.log(`La frase extraida es: ${fraseSub}`);

    // slice (Se puede utilizar valores negativos)
    const fraseSlice = frase.slice(-5, -1);
    console.log(`La frase extraida es: ${fraseSlice}`);

    // replace
    const fraseReplace = frase.replace("Hola", "Adios");
    console.log(`La frase reemplazada es: ${fraseReplace}`);

    // replaceAll
    const fraseReplaceAll = frase.replaceAll("Hola", "Adios");
    console.log(`La frase reemplazada es: ${fraseReplaceAll}`);

    // split
    const fraseSplit = frase.split(" ");
    console.log(`La frase dividida es: ${fraseSplit}`);

    // includes
    const fraseIncludes = frase.includes("Hola");
    console.log(`La frase incluye "Hola": ${fraseIncludes}`);

    // indexOf
    const fraseIndexOf = frase.indexOf("Hola");
    console.log(`El indice de "Hola" es: ${fraseIndexOf}`);

    // startsWith
    const fraseStartsWith = frase.startsWith("Hola");
    console.log(`La frase comienza con "Hola": ${fraseStartsWith}`);

    // endsWith
    const fraseEndsWith = frase.endsWith("Adios");
    console.log(`La frase termina con "Adios": ${fraseEndsWith}`);

    rl.close();
})