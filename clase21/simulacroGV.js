//1.a
let mascotas = [
    {id: 1, nombre: "Firulais", especie: "perro", edad: 2, disponible: true},
    {id: 2, nombre: "Pipo", especie: "gato", edad: 5, disponible: false},
    {id: 3, nombre: "Lola", especie: "perro", edad: 4, disponible: false},
    {id: 4, nombre: "Negrito", especie: "perro", edad: 1, disponible: true},
    {id: 5, nombre: "Pancho", especie: "gato", edad: 2, disponible: true}
];

//1.b
const propietarios = [
    {id: 1, nombre: "Juan Perez", email: "juan.perez@example.com", mascotasAdoptadas: [1]},
    {id: 2, nombre: "Maria Lopez", email: "maria.lopez@example.com", mascotasAdoptadas: [2, ]},
    {id: 3, nombre: "Carlos Martinez", email: "carlos.martinez@example.com", mascotasAdoptadas: [5]},
    {id: 4, nombre: "Mariano Gimenez", email: "mariano.gimenez@example.com", mascotasAdoptadas: [4]},
    {id: 5, nombre: "Juana Campos", email: "juana.campos@example.com", mascotasAdoptadas: [3]}
];

//2.a
function agregarMascota(mascotas, nombre, especie, edad) {
    let id = mascotas.length + 1;
    let nuevoObjeto = {id, nombre, especie, edad};
    mascotas.push(nuevoObjeto)
}

agregarMascota(mascotas, 'Roma', 'loro', 5);

agregarMascota(mascotas, 'Toby', 'gato', 3);


//console.log(mascotas);

//2.b
function buscarMascota(criterio, valor) {
    return mascotas.filter(mascotas=>
mascotas[criterio] === valor);
}
let resultadoBusqueda = 
buscarMascota("nombre","Lola");

//console.log(resultadoBusqueda)

//3.a
function registrarPropietario(nombre, email) {
    let id = propietarios.length + 1;
    let nuevoPropietario = {id, nombre, email};
    propietarios.push(nuevoPropietario);
}

registrarPropietario('Ricardo', 'ricardo@gmail.com');

//console.log(propietarios);

//3.b
function buscarPropietario(email) {
    return propietarios.filter(propietario => propietario.email === email);
}

//console.log(buscarPropietario('ricardo@gmail.com'));

/*4. Sistema de Adopciones
a) Desarrollar una función adoptarMascota(idMascota, idPropietario) que 
marque una mascota como no disponible y la agregue a la lista de 
mascotas adoptadas del propietario.
b) Implementar una función devolverMascota(idMascota, idPropietario) 
que marque una mascota como disponible y la elimine de la lista de 
mascotas adoptadas del propietario.
5. Interfaz de Usuario por Consola
a) Implementar una función menuPrincipal() que muestre un menú de 
opciones al usuario y permita interactuar con el sistema utilizando 
prompt().
b) El menú debe incluir opciones para todas las funcionalidades 
anteriores y manejar la lógica mediante estructuras de control (if, 
switch, ciclos)*/