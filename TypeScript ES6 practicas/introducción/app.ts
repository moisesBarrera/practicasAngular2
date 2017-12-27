
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
