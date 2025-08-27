// Declara un objeto animal, con las propiedades raza, tamaño y color muestra el objeto en consola y luego imprime cada propiedad por separado. 

const animal = {
    raza: "Perro",
    tamaño: "1.50 metros",
    color: "Negro"
}

console.log(animal.raza)
console.log(animal.tamaño)
console.log(animal.color)

// Al objeto animal agrega una nueva propiedad (la que desees) imprímela en consola y luego elimina la propiedad raza.
animal.familia = "Cánidos"
console.log(animal.familia)

delete animal.raza

// Crea un objeto usuario con las propiedades usuario, email y rol, usa destructuring para crear variables con esas propiedades y mostrarlas en consola. 
const usuario = {
    user: 'kenmej',
    email: 'kenmej@gmail.com',
    rol: 'Dev Junior',
}

const {user, email, rol} = usuario
console.log(user)
console.log(email)
console.log(rol)

