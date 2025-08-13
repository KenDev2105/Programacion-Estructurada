/* Un sistema de festion de pedidos recibe codigos de seguimiento en el formato:
PED-2025-0045, se necesita extraer el año del pedido y el numero de orden
usando el metodo substring() */
// 1. Extraer el año del pedido y el número de orden usando substring()

import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
    output: process.stdout,
});

// rl.question("Ingrese el código del pedido ( ej: PED-2025-0045): ", (codigoPedido) => {
//     const año = codigoPedido.substring(4, 8);
//     const numeroOrden = codigoPedido.substring(9);

//     console.log(`Año: ${año}`);
//     console.log(`Número de orden: ${numeroOrden}`);

//     rl.close();
//     })


// 2.  En un formulario web pides al usuario su nombre completo 
// y quieres asegurarte de que no haya espacios al inicio o final, 
// y además quieres mostrar cuántos caracteres tiene el nombre sin 
// contar los espacios.

// rl.question("Ingrese su nombre completo: ", (nombre) => {
//     const nombreSinEspacios = nombre.trim();
//     const longitudNombre = nombre.replaceAll(" ", "").length;

//     console.log(`Nombre sin espacios: ${nombreSinEspacios}`);
//     console.log(`Longitud del nombre sin espacios: ${longitudNombre} caracteres`);

//     rl.close();
// });

/* 3. Un sistema de registro de usuarios necesita guardar 
todos los correos electrónicos en minúsculas para evitar duplicados 
causados por diferencias en mayúsculas y minúsculas. 
Además, se requiere verificar si el correo pertenece 
al dominio @gmail.com antes de aceptarlo. 

El programa debe:
 Solicitar al usuario su correo electrónico. 
Convertir el correo ingresado a minúsculas. 
Verificar si contiene el dominio @gmail.com. 
Mostrar en pantalla el correo normalizado y si es o no un dominio válido.*/

// rl.question("Ingrese su correo electrónico: ", (email) => {
//     const emailMinusculas = email.toLowerCase();
//     const esGmail = emailMinusculas.includes("@gmail.com")

//     console.log(`Correo normalizado: ${email}`);
//     console.log(`Correo en minusculas: ${emailMinusculas}`);
//     console.log(`¿El correo pertenece a Gmail? ${esGmail ? "Sí, dominio gmail valido" : "No, dominio no válido"}`);


//     rl.close();
// })

// 4. De un código generado automáticamente solo se requiere mostrar los últimos 4 caracteres 

// rl.question("Ingrese el código generado automáticamente: ", (codigo) => {
//     const caracteresFinales = codigo.slice(-4);
//     console.log(`Los últimos 4 caracteres del código son: ${caracteresFinales}`);
//     rl.close(); 
// });

// 5. Un programador quiere saber en que parte del mensaje se encuentra la palabra "error"

rl.question("Ingrese un mensaje: ", (mensaje) => {
    const indiceError = mensaje.indexOf("error");

    if (indiceError !== -1) {
        console.log(`La palabra "error" se encuentra en el índice: ${indiceError}`);
    } else {
        console.log('La palabra "error" no se encuentra en el mensaje.');
    }
    rl.close();
})