/* 2. Un técnico en informática necesita llevar un registro digital de las computadoras que
administra en la empresa. Para ello, se requiere crear un objeto en Node.js que
represente una computadora con sus características técnicas.
Crea un objeto llamado computadora con las siguientes propiedades:
• marca
• modelo
• especificaciones: un objeto anidado con las propiedades:
• procesador
• ram
• almacenamiento
o Modifica el valor de la propiedad ram a "16GB".
o Agrega dentro de especificaciones una nueva propiedad llamada
sistemaOperativo con el valor "Windows 11".
o Elimina la propiedad almacenamiento del objeto especificaciones.
o Muestra en consola la información de la computadora en un formato legible
utilizando template literals.
 */

// Objeto computadora
let computadora = {
    marca: "Asus",
    modelo: "Zephyrus G15",
    especificaciones: {
        procesador: "Intel i9 14900",
        ram: "8GB",
        almacenamiento: "512GB SSD"
    }
}
// Modificar propiedad RAM a 16GB
computadora.especificaciones.ram = "16GB"

// Nueva propiedad sistemaOperativo con valor "Windows 11" en objeto especificaciones
computadora.especificaciones.sistemaOperativo = "Windows 11"

// Eliminar propiedad almacenamiento del objeto especificaciones
delete computadora.especificaciones.almacenamiento

console.log("======= Informacion de Producto ======")
console.log(`Marca: ${computadora.marca}`)
console.log(`Modelo: ${computadora.modelo}`)
console.log(`== Especificaciones ==`)
console.log(`Procesador: ${computadora.especificaciones.procesador}`)
console.log(`RAM: ${computadora.especificaciones.ram}`)