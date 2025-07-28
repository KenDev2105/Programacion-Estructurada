// Entrada cine
let entrada = true;
let edad = 14;

let puedeEntrar = (edad >= 13 && entrada) ? "Usted puede entrar" : "Usted no puede entrar"
console.log(puedeEntrar)

// Descuento especial
let age = 75;
let discapacitado = true;

let descuento = (age >= 60 || discapacitado) ? "Usted recibe su descuento" : "Usted no cumple los requisitos"
console.log(descuento)

// Aprobar
let nota = 7;
let recuperacion = true;

let aprobado = (nota >= 7 || recuperacion) ? "Felicidades, has aprobado!" : "Lo sentimos, has reprobado"
console.log(aprobado)