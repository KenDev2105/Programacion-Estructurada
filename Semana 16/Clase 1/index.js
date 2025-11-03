//*  Condicionales en JavaScript
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Ejercicio 1

const contraseña = "12345678";

rl.question("Ingresa la contraseña ", password => {
    if(password === contraseña){
        console.log("Contraseña correcta");
    } else {
        console.log("Contraseña incorrecta");
    }
    rl.close();
})

// Ejercicio 2

rl.question("Ingresa un numero ", num =>{
    if(num > 0){
        console.log("El numero es positivo")
    } else if(num < 0){
        console.log("El numero es negativo");
    }else{
        console.log("El numero es cero");
    }
    rl.close();
});

// Ejercicio 3

rl.question("Ingresa el monto de la compra ", monto =>{
    if(monto >= 100){
        monto = monto * 1.1;
        console.log("El monto de compra es de: $${monto");
    } else if(monto > 50 && monto < 100){
        monto = monto * 1.05;
        console.log("El monto de compra es de: $${monto}");
    } else {
        console.log("El monto de compra es de: $${monto}");
    }
    rl.close();
});

// Ejercicio 4
const nombres = ["Stan", "Ortiz", "Diana", "Axel", "Kevin", "William", "Hugo", "Josué", "Oscar", "Henry", "Requeno", "Soto", "Ken", "Ezequiel", "Isaac"];

rl.question("Ingrese un nombre ", nombre =>{
    if(nombres.includes(nombre)){
        console.log("El nombre esta en la lista");
    } else {
        console.log("El nombre no esta en la lista");
    }
    rl.close();
})

// Ejercicio 5
rl.question("Ingrese su edad ", edad =>{
    if(edad >= 0 && edad <= 11){
        console.log("Usted es un niño");
    } else if(edad >= 12 && edad <= 17){
        console.log("Usted es un adolescente");
    } else if(edad >= 18 && edad <= 59){
        console.log("Usted es un adulto");
    } else if(edad >= 60){
        console.log("Usted es un adulto mayor");
    } else if(edad > 100){
        console.log("Usted es un centenario")
    } else{
        console.log("Edad invalida")
    }
    rl.close();
})