"use strict";
// nombre tiene que ser una variable
// de tipo texto
function saludar(nombre) {
    console.log("Hola " + nombre.toUpperCase());
}
var wolverine = {
    nombre: "Logan"
};
saludar(wolverine.nombre);
