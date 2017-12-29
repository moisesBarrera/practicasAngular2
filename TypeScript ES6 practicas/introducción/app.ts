
const OPCIONES = "todas";

// nombre tiene que ser una variable
// de tipo texto
function  saludar (nombre:string)
{
  console.log("Hola " + nombre.toUpperCase());
  console.log(OPCIONES);
}

let wolverine = {
  nombre: "Logan"
};

saludar(wolverine.nombre);

let mensaje = "hola";

if(true)
{
  let mensaje = "adios";
}

console.log(mensaje);

//Tipos de variables, Sección 2, Clase 12
let nombre:string = "Peter";
let numero:number = 12;
let booleano:boolean = true;
let hoy:Date = new Date();

hoy = new Date("2010-10-21");

console.log(hoy);

let cualquiera:any = nombre;
cualquiera =  numero;
cualquiera = booleano;
cualquiera = hoy;

let spiderman = {
  nombre: "Peter",
  edad: 20
};

//Templates Literarios sección 2, clase 13

function getNombre()
{
  return "Fernando";
};

nombre = "Juan";
let apellido:string = "Perez";
let edad:number = 32;

//let texto = "hola " + nombre + " " + apellido;

let texto = `Hola,
${ nombre } ${ apellido }
(${ edad })`;


let texto2:string = `${1 + 2}, ${ getNombre() }`;

console.log(texto);

console.log(texto2);

//Parametros obligatorios, por defecto y opcionales.

function activar( quien: string,  //obligatorio
                    objecto:string = "Batiseñal", // defecto
                      momento?:string){ //optional
  let mensaje:string;

  if( momento )
  {
    mensaje = `${ quien } activó la ${ objecto } en la ${ momento }`;
  } else {
    mensaje = `${ quien } activó la ${ objecto }`;
  }

  console.log(mensaje);
}

activar("Gordon" );
activar("Gordon", "BATISEÑAL");
activar("Gordon", "batiseñal", "tarde");

// Funciones de flecha

let miFuncion = function( a ){
  return a;
};

let miFuncionF = ( a ) => a;

let miFuncion2 = function ( a:number, b:number){
  return a + b;
}

let miFuncion2F = (a:number, b:number) => a + b;

let miFuncion3 = function( nombre:string ){
  nombre = nombre.toUpperCase();
  return nombre;
}

let miFuncion3F = ( nombre:string ) => {
  nombre = nombre.toUpperCase();
  return nombre;
}

let hulk = {
  nombre: "Hulk",
  smash(){
    setTimeout(function(){
      console.log(this.nombre + " smash!!"); //En este caso el this apunta al global que es el window
    },1500);

      setTimeout(() =>
        console.log(this.nombre + " smash!!") // En la función de flecha el this apunta al this local del objeto hulk
      ,1500);
  }
}

hulk.smash();

console.log( miFuncion("Normal") );
console.log( miFuncionF("Flecha") );

//Sección 2, lección 16 - Destructuración de objetos y Arreglos

let avenger = {
  nombree: "Steve",
  clave: "Capitan America",
  poder: "Droga"
}
            //alias
let {nombree:name, clave, poder} = avenger;

//nombre = avenger.nombre;
//let clave = avenger.clave;
//let poder = avenger.poder;

console.log(name, clave, poder);

let avengers:string[] = ["Thor","Steve","Tony"];

let [thor, capi, ironman] = avengers;

console.log(thor, capi, ironman);
