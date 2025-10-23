// const nombre = "Eli" ;
// const edad = 30;
const altura = 1.50;

// Creación de objetos con object literal
const persona = {
    nombre: "Axl",
    edad: 23,
    altura: 1.63
}

// Imprimir 
console.log(persona.nombre),


// Acceso por punto 
console.log(persona.nombre)
// Acceder a las propiedades por corchete
console.log(persona['edad'])

// Agregamos mas propiedades al objeto
persona.imagen = "imagen.jpg"

console.log(persona);

// Eliminando propiedades del objeto
delete persona.altura;
console.log(persona);

// Modificamos el valor de una propiedad o llave
persona.nombre ="Elizabeth";
console.log(persona);

// Adignado el valor de la propiedades del objeto a una variable
const nom = persona.nombre
console.log(nom);

// Destructuring
// const {nombre} = persona;
// console.log(nombre)

// const{edad} = persona;
// console.log(edad)

const {pepito} = persona;
console.log(pepito)

const {nombre , edad} = persona;
console.log(nombre)
console.log(edad)

