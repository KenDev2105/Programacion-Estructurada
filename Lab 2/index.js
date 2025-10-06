import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ejercicio 1
/* let gastos = []

rl.question("Ingresa tu primer gasto del mes ", (gasto1) => {
    rl.question("Ingresa tu segundo gasto del mes ", (gasto2) => {
        rl.question("Ingresa tu tercer gasto del mes ", (gasto3) =>{
            gastos.push(gasto1)
            gastos.push(gasto2)
            gastos.push(gasto3)


            const total = parseFloat(gasto1) + parseFloat(gasto2) + parseFloat(gasto3)

            console.log(`Tu primer gasto fue de: ${gastos[0]}`)
            console.log(`Tu segundo gasto fue de: ${gastos[1]}`)
            console.log(`Tu tercer gasto fue de: ${gastos[2]}`)
            console.log(`El gasto total fue de: ${total}`)
            rl.close()
        })
    })
}) */

// Ejercicio 2
/* const litros = []

rl.question("Ingresa el gasto de litros del primer viaje ", (litro1) => {
    rl.question("Ingresa el gasto de litros del segundo viaje ", (litro2) => {
        rl.question("Ingresa el gasto de litros del tercer viaje ", (litro3) => {
      
            litros.push(litro1)
            litros.push(litro2)
            litros.push(litro3)

            const prom = (parseFloat(litro1) + parseFloat(litro2) + parseFloat(litro3))/litros.length

            console.log(`El gasto promedio es de ${prom}lt`)
            rl.close()
        })
    })
}) */

// Ejercicio 3
/* const productos = []

rl.question("Ingresa el precio del primer producto ", (producto1)=>{
    rl.question("Ingresa el precio del segundo producto ", (producto2)=>{
        rl.question("Ingresa el precio del tercer producto ", (producto3)=>{
            
            producto1 = parseFloat(producto1)
            producto2 = parseFloat(producto2)
            producto3 = parseFloat(producto3)

            productos.push(producto1)
            productos.push(producto2)      
            productos.push(producto3)      
            

            const subtotal = producto1+producto2+producto3
            const iva = subtotal*0.13
            const total = iva + subtotal

            console.log(`El subtotal es de: ${subtotal}`)
            console.log(`El IVA es de: ${iva}`)
            console.log(`El total es de: ${total}`)
            rl.close()
        })
    })
}) */

// Ejercicio 4
const salario = []

rl.question("Ingresa tu sueldo base ", (sueldo) =>{
    rl.question("Ingresa el bono que recibes ", (bono) =>{
        rl.question("Ingresa el descuento que se te hace por el seguro ", (descuento)=>{

            sueldo = parseFloat(sueldo)
            bono = parseFloat(bono)
            descuento = parseFloat(descuento)

            const salarioFinal = sueldo + bono - descuento
            
            console.log(`Tu sueldo es de: $${sueldo}`)
            console.log(`Tienes un bono de: $${bono}`)
            console.log(`Tienes un descuento por seguro de: $${descuento}`)
            console.log(`Tu salario final es de: $${salarioFinal}`) 
            rl.close()
        })
    })
})
