"use strict";
var OPCIONES = "todas";
// nombre tiene que ser una variable
// de tipo texto
function saludar(nombre) {
    console.log("Hola " + nombre.toUpperCase());
    console.log(OPCIONES);
}
var wolverine = {
    nombre: "Logan"
};
saludar(wolverine.nombre);
var mensaje = "hola";
if (true) {
    var mensaje_1 = "adios";
}
console.log(mensaje);
