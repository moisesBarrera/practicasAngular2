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
//Tipos de variables, Sección 2, Clase 12
var nombre = "Peter";
var numero = 12;
var booleano = true;
var hoy = new Date();
hoy = new Date("2010-10-21");
console.log(hoy);
var cualquiera = nombre;
cualquiera = numero;
cualquiera = booleano;
cualquiera = hoy;
var spiderman = {
    nombre: "Peter",
    edad: 20
};
//Templates Literarios sección 2, clase 13
function getNombre() {
    return "Fernando";
}
;
nombre = "Juan";
var apellido = "Perez";
var edad = 32;
//let texto = "hola " + nombre + " " + apellido;
var texto = "Hola,\n" + nombre + " " + apellido + "\n(" + edad + ")";
var texto2 = 1 + 2 + ", " + getNombre();
console.log(texto);
console.log(texto2);
//Parametros obligatorios, por defecto y opcionales.
function activar(quien, //obligatorio
    objecto, // defecto
    momento) {
    if (objecto === void 0) { objecto = "Batiseñal"; }
    var mensaje;
    if (momento) {
        mensaje = quien + " activ\u00F3 la " + objecto + " en la " + momento;
    }
    else {
        mensaje = quien + " activ\u00F3 la " + objecto;
    }
    console.log(mensaje);
}
activar("Gordon");
activar("Gordon", "BATISEÑAL");
activar("Gordon", "batiseñal", "tarde");
// Funciones de flecha
var miFuncion = function (a) {
    return a;
};
var miFuncionF = function (a) { return a; };
var miFuncion2 = function (a, b) {
    return a + b;
};
var miFuncion2F = function (a, b) { return a + b; };
var miFuncion3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var miFuncion3F = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var hulk = {
    nombre: "Hulk",
    smash: function () {
        var _this = this;
        setTimeout(function () {
            console.log(this.nombre + " smash!!"); //En este caso el this apunta al global que es el window
        }, 1500);
        setTimeout(function () {
            return console.log(_this.nombre + " smash!!");
        } // En la función de flecha el this apunta al this local del objeto hulk
        , 1500);
    }
};
hulk.smash();
console.log(miFuncion("Normal"));
console.log(miFuncionF("Flecha"));
//Sección 2, lección 16 - Destructuración de objetos y Arreglos
var avenger = {
    nombree: "Steve",
    clave: "Capitan America",
    poder: "Droga"
};
//alias
var name = avenger.nombree, clave = avenger.clave, poder = avenger.poder;
//nombre = avenger.nombre;
//let clave = avenger.clave;
//let poder = avenger.poder;
console.log(name, clave, poder);
var avengers = ["Thor", "Steve", "Tony"];
var thor = avengers[0], capi = avengers[1], ironman = avengers[2];
console.log(thor, capi, ironman);
