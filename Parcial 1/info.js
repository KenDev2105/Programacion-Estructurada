/* Enunciados:
1. Sistema de Información Personal. María García, gerente de recursos humanos,
necesita crear fichas digitales para nuevos empleados. Cada ficha debe contener
información personal y calcular algunos datos automáticamente.
Cree un objeto empleado con las siguientes propiedades:
• Nombre completo
• edad
• salario
• activo
• fechaIngreso
• Habilidades. Ejemplo: [Excel, Power PI, Analisis]
Manipule el objeto:
• Agregue la propiedad departamento con valor "Contabilidad"
• Modifique el salario aumentándolo en 15%
• Elimine la propiedad activo
Genere las siguientes salidas usando template literals:
=== FICHA DE EMPLEADO ===
Nombre: ANA LUCÍA RODRÍGUEZ
Edad: 28 años Salario: $1,380.58
Departamento: contabilidad
Año de ingreso: 2025
Habilidades (3): Excel, Contabilidad, Análisis */

// Objeto empleaado
let empleado = {
    nombre_completo: "Kenneth Mejia",
    edad: 19,
    salario: 1000,
    activo: true,
    fechaIngreso: new Date(),
    habilidades: "SQL, PowerP, Excel"
}

// Agregar propiedad departamento con valor "contabilidad"
empleado.departamento = "contabilidad"

// Modificacion de salario del 15%
let aumento = empleado.salario * 0.15
empleado.salario = empleado.salario + aumento

// Eliminar propiedad activo
delete empleado.activo

console.log("=== FICHA DE EMPLEADO ===")
console.log(`Nombre: ${empleado.nombre_completo}`)
console.log(`Edad: ${empleado.edad} años Salario: ${empleado.salario}`)
console.log(`Departamento: ${empleado.departamento}`)
console.log(`Año de Ingreso: ${empleado.fechaIngreso.getFullYear()}`)
console.log(`Habilidades: ${empleado.habilidades}`)


