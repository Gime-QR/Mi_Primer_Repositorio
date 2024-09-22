// 1. Estructura de Datos
// a) Crear un array de objetos llamado mascotas que contenga al menos 5
// mascotas. Cada mascota debe tener las siguientes propiedades:
// ✓ id (número)
// ✓ nombre (string)
// ✓ especie (string)
// ✓ edad (número)
// ✓ disponible (booleano)

let mascotas = [
    {id: 1, nombre: "Firulais", especie: "perro", edad: 2, disponible: true},
    {id: 2, nombre: "Pipo", especie: "gato", edad: 5, disponible: false},
    {id: 3, nombre: "Lola", especie: "perro", edad: 4, disponible: false},
    {id: 4, nombre: "Negrito", especie: "perro", edad: 1, disponible: true},
    {id: 5, nombre: "Pancho", especie: "gato", edad: 2, disponible: true}
];


// b) Crear un array de objetos llamado propietarios con al menos 3
// propietarios. Cada propietario debe tener:
// ✓ id (número)
// ✓ nombre (string)
// ✓ email (string)
// ✓ mascotasAdoptadas (array de ids de mascotas)

let propietarios = [
    {
    id: 1, 
    nombre: 'Juan', 
    email: 'juan@gmail.com', 
    mascotasAdoptadas: [1, 2]
    },
    {
    id: 2, 
    nombre: 'Ana', 
    email: 'ana@gmail.com', 
    mascotasAdoptadas: [3]
    },
    {
    id: 3, 
    nombre: 'Juana', 
    email: 'juana@gmail.com', 
    mascotasAdoptadas: [4, 5]
    },
];

// 2. Funciones de Gestión de Mascotas
// a) Implementar una función agregarMascota(id, nombre, especie, edad)
// que agregue una nueva mascota al array mascotas.


function agregarMascota(mascotas, nombre, especie, edad) {
    let id = mascotas.length + 1;
    let nuevoObjeto = {id, nombre, especie, edad};
    mascotas.push(nuevoObjeto)
}

agregarMascota(mascotas, 'Roma', 'loro', 5);
agregarMascota(mascotas, 'Toby', 'gato', 3);


console.log(mascotas);

// b) Crear una función buscarMascota(criterio, valor) que permita buscar
// mascotas por nombre o especie.

function buscarMascota(criterio, valor) {
    return mascotas.filter(mascota => mascota[criterio] === valor);
};

let resultadoBusqueda = buscarMascota('especie', 'perro');
console.log('Buscar por nombre "Lola":', resultadoBusqueda);

// 3. Gestión de Propietarios
// a) Implementar una función registrarPropietario(nombre, email) que
// agregue un nuevo propietario al array propietarios.

function registrarPropietario(nombre, email) {
    let id = propietarios.length + 1;
    let nuevoPropietario = {id, nombre, email};
    propietarios.push(nuevoPropietario);
}

registrarPropietario('Ricardo', 'ricardo@gmail.com');

console.log(propietarios);

// b) Crear una función buscarPropietario(email) que devuelva la
// información de un propietario dado su email

function buscarPropietario(email) {
    return propietarios.filter(propietario => propietario.email == email);
}

console.log(buscarPropietario('ana@gmail.com'));