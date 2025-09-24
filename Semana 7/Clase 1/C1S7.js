const numeros = [10,20,30,40,50]

const meses = new Array("enero","febrero","marzo")

const deTodo = ["Hola", 10, null, true,{nombre: "Juan", trabajo: "Programador"}]
console.table(deTodo[4].nombre) 

// Modificar valores de un arreglo
numeros[1] = 23
console.log(numeros)

meses.push("abril")
console.log(meses)


meses.pop()
console.log(meses)

meses.shift()
console.log(meses)

meses.unshift("Diciembre")
console.log(meses)

for (let i = 0; i <= meses.length;i++){
    console.log(meses[i])
}