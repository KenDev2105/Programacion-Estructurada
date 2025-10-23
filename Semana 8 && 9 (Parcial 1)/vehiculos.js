/* 3. Un agente de tránsito necesita registrar la información de los vehículos asegurados
en su sistema digital. Para ello, solicita la creación de un vehiculo en Node.js que
almacene tanto los datos del vehículo como los de su seguro.
Declara un vehiculo llamado vehiculo con las siguientes propiedades:
• marca
• año
• seguro: un vehiculo anidado con las propiedades:
o compania
o numeroPoliza
o vigente
• Cambia el valor de la propiedad compañia dentro de seguro por otro nombre de
aseguradora.
• Agrega una nueva propiedad dentro de seguro llamada fechaVencimiento con una
fecha de expiración (ejemplo: "2026-05-10").
• Elimina la propiedad vigente del vehiculo seguro.
• Muestra en consola la información del vehículo y los datos del seguro en un formato
legible utilizando template literal. */

// Objeto vehiculo
let vehiculo = {
    marca: "Nissan",
    año: 2024,
    seguro: {
        compañia: "ASESUISA",
        numeroPoliza: 1234567890,
        vigente: false
    }
}

// Cambio de nombre de la aseguradora
vehiculo.seguro.compañia = "Seguros Josué"

// Nueva propiedad fechaVencimiento dentro del objeto seguro
vehiculo.seguro.fechaVencimiento = new Date(2025,3,12)

// Eliminar propiedad vigente del objeto seguro
delete vehiculo.seguro.vigente

console.log("====== Datos del Vehiculo ======")
console.log(`Marca: ${vehiculo.marca}`)
console.log(`Año ${vehiculo.año}`)
console.log(`=== Datos del Seguro ===`)
console.log(`Compañia: ${vehiculo.seguro.compañia}`)
console.log(`Poliza: ${vehiculo.seguro.numeroPoliza}`)
console.log(`Fecha de Vencimiento: ${vehiculo.seguro.fechaVencimiento}`)
