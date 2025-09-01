/* Una tienda online gestiona la información de sus productos. Cada producto debe tener:
Detalles (nombre, precio, categoria)
Inventario (stock, proveedor, ubicacion)
Historial (fechaIngreso, ultimaVenta, ventasTotales)
Tareas a realizar:
Crear el objeto producto.
Mostrar únicamente los detalles.
Aumentar el stock en 50 unidades.
Cambiar la categoría a "Electrónica".
Extraer el nombre y precio en variables separadas.
Mostrar el objeto actualizado. */

console.log("EJERCICIO 1\n");

// Crear el objeto producto
const producto = { 
    detalles: {
        nombre: "PS5",
        precio: 1000,
        categoria: "Videojuegos"
    },
    inventario: {
        stock: 100,
        proveedor: "Sony",
        ubicacion: "Estados Unidos"
    },
    historial: {
        fechaIngreso: "08-10-2025",
        ultimaVenta: "12-11-2025",
        ventasTotales: 1000
    }
}

// Mostrar únicamente los detalles
console.log(producto.detalles);

// Aumentar el stock en 50 unidades
producto.inventario.stock += 50;
console.log(producto.inventario.stock);

// Cambiar la categoría a "Electrónica"
producto.detalles.categoria = "Electronica";
console.log(producto.detalles.categoria);

// Extraer el nombre y precio en variables separadas
const {nombre, precio} = producto.detalles;
console.log(nombre);
console.log(precio);

// Mostrar el objeto actualizado
console.log(producto);

/* Una aplicación móvil necesita gestionar los perfiles de sus usuarios. 
Se requiere crear un objeto anidado que contenga:
-Información personal (nombre, edad, email)
-Preferencias de la aplicación (idioma, notificaciones, tema)
-Estadísticas de uso (fechaRegistro, ultimoAcceso, numeroSesiones).
Tareas a realizar:
-Crear un objeto perfilUsuario con tres objetos anidados.
-Mostrar cada sección de información por separado.
-Cambiar el idioma de "español" a "inglés".
-Actualizar la fecha de último acceso a la fecha actual.
-Eliminar una preferencia innecesaria.
-Extraer el email y el idioma en variables separadas.
-Mostrar el perfil completo actualizado. */

console.log("EJERCICIO 2\n");

// Crear un objeto perfilUsuario con tres objetos anidados
const perfilUsuario = {
    informacionPersonal: {
        nombre: "Ken",
        edad: 19,
        email: "ken@gmail.com"
    },
    appPreferencias: {
        idioma: "Español",
        notificaciones: true,
        tema: "Oscuro"
    },
    estadisticasUso: {
        fechaRegistro: "01-06-2025",
        ultimoAcceso: "30-08-2025",
        numeroSesiones: 6
    }
}

// Mostrar cada sección de información por separado
console.log(perfilUsuario.informacionPersonal);
console.log(perfilUsuario.appPreferencias);
console.log(perfilUsuario.estadisticasUso);

// Cambiar el idioma de "español" a "inglés"
perfilUsuario.appPreferencias.idioma = "Ingles";
console.log(perfilUsuario.appPreferencias.idioma);

// Actualizar la fecha de último acceso a la fecha actual
perfilUsuario.estadisticasUso.ultimoAcceso = "01-09-2025";
console.log(perfilUsuario.estadisticasUso.ultimoAcceso);

// Eliminar una preferencia innecesaria
delete perfilUsuario.appPreferencias.tema;
console.log(perfilUsuario.appPreferencias);

// Extraer el email y el idioma en variables separadas
const {email} = perfilUsuario.informacionPersonal;
console.log(email);
const {idioma} = perfilUsuario.appPreferencias;
console.log(idioma);

// Mostrar el perfil completo actualizado
console.log(perfilUsuario);

/* Una biblioteca maneja información de sus libros:
-Información (titulo, autor, genero)
-Disponibilidad (copias, prestados, ubicacion)
-Registro (fechaPublicacion, fechaIngreso, ultimaRevision)

Tareas a realizar:
-Crear el objeto libro.
-Mostrar la información del autor.
-Calcular cuántos ejemplares disponibles quedan (copias - prestados).
-Actualizar la ultimaRevision con la fecha actual.
-Cambiar el género del libro.
-Extraer titulo y ubicacion en variables.
-Mostrar el objeto actualizado. */

console.log("EJERCICIO 3")

const libro = {
    informacion: {
        titulo: "Harry Poter",
        autor: "JK Rowling",
        genero: "Fantasia"
    },
    disponibilidad: {
        copias: 20,
        prestados: 15,
        ubicacion: "San Miguel"
    },
    registro: {
        fechaPublicacion: new Date("01-09-2006"),
        fechaIngreso: new Date("10-09-2024"),
        ultimaRevision: new Date("12-12-2025")
    }
}

// Mostrar informacion del autor
console.log(libro.informacion.autor)

// Calcular cuántos ejemplares disponibles quedan (copias - prestados).
libro.disponibilidad.disponibles = libro.disponibilidad.copias - libro.disponibilidad.prestados
console.log(libro.disponibilidad.disponibles)

// Actualizar la ultimaRevision con la fecha actual
libro.registro.ultimaRevision = new Date()
console.log(libro.registro.ultimaRevision)

// Cambiar el genero al libro
libro.informacion.genero = "Romance"
console.log(libro.informacion)

// Extraer titulo y ubicacion en variables.
const {titulo} = libro.informacion
console.log(titulo)
const {ubicacion} = libro.disponibilidad
console.log(ubicacion)

// Mostrar el objeto actualizado.
console.log(libro)