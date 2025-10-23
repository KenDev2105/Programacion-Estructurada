import { parse } from "path";
import readline from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
// Funcion para saludar al usuario y solicitarle numeros para realizar una resta
function saludar(nombre){
    console.log(`Hola ${nombre}, bienvenido a JavaScript`);
}

let resta = (n1,n2) =>{
    let res = n1 - n2;
    return res;
};

/* rl.question("Ingrese su nombre para saludarlo: ", (nombre) =>{
    rl.question("Ingrese un primer numero: ", (n1) =>{
        rl.question("Ingrese el segundo numero: ", (n2)=>{
  
            saludar(nombre);
            console.log("La resta de ambos numeros es: ", (resta(n1,n2)))
            rl.close()
        })
    })
}) */

//Funcion para encontrar el area de un rectangulo

function calcularArea(base,altura){
    let calculo = parseFloat(base*altura);
    return calculo;
};

/* rl.question("Ingrese la base del rectangulo: ", base=>{
    rl.question("Ingresa la altura del rectangulo: ", altura =>{
        
        let result = calcularArea(base,altura)
        console.log("El area de su rectangulo es de: ", result)
        console.log("El area de su rectangulo es de: ", calcularArea(base,altura))

        rl.close()
    })
}) */

// Calcular un descuento

function calcularDescuento(precio,descuento){
    precio = parseFloat(precio)
    descuento = parseFloat(descuento)

    let des = precio * descuento;
    let total = precio - des

    console.log(`El descuento del producto obtenido es de: $${des} \n Total a pagar es de: $${total}`)
}

rl.question("Ingrese el precio del producto: ", precio=>{
    rl.question("Ingrese el descuento a aplicar, expresado en decimales (Ej: 0.20 = 20%): ", descuento=>{

        calcularDescuento(precio,descuento)
        rl.close()
    })
})