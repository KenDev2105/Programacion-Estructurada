//  
const estudiante = {
    nombre: "Ken",
    apellido: "Mejía",
    edad: 19,
    direccion: {
        pais: "El Salvador",
        calle: "Alameda Roosveelt",
        numCasa: 27
    }
 }

//  Acceso al objeto 
console.log(estudiante);
console.log(estudiante.direccion);

console.log(estudiante["direccion"])

// Agregar propiedades al objeto
estudiante.colorOjos = "Azules";
console.log(estudiante);

// Agregar propiedades al objeto anidado
estudiante.direccion.Departamento = "San Miguel";
console.log(estudiante.direccion);

// Modificar propiedades del objeto
estudiante.direccion.numCasa = 40;
console.log(estudiante.direccion.numCasa);

// Eliminar propiedades del objeto
delete estudiante.direccion.numCasa;
console.log(estudiante.direccion);