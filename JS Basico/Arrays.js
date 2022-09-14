//es una base de datos, es un valor que guarda valores, pueden ser numeros, strings o objetos.
//es una manera de crear una estructura de datos.
//var nombre = []; //esta es la sintaxis del arrays.

var frutas = ["Manzana", "Platano", "Cereza", "Fresa"]; //es importante colocar , entre los datos que coloquemos.

console.log(frutas);

//Si introdujeramos esto dentro del codigo, nos mostraria todos los elementos que constituye el array frutas.
//Veríamos reflejado; Manzana, Platano, Cereza y Fresa. Y también nos daría información de cuántos elementos componen
//el array, sí de alguna manera quisieramos que solo nos mostrara uno en específico, usaramos el siguiente codigo

console.log(frutas[0]); //En programacion, los elementos (Y cualquier cosa en general) se cuentan a partir del 0
// Esto nos quiere decir que 0 = 1. Entonces, sí tenemos 4 elementos, el n°1, que es Manzana, sería representado como un 0.


"Manzana" //Es lo que nos mostraría en el código.
"Platano" //Si colocaramos 1. y así sucesivamente.
 
//si quisieramos ver la "longitud" que vendría sienod saber la cantidad de elementos que existe dentro de un array
//procederiamos a realizar el siguiente código: 
console.log(frutas.length) //esto nos dará un resultado de la cantidad de elementos que tengamos, en este caso, 4.

//Cuando estamos hablando de arrays, existen "metodos" los cuales nos van a dar la posibilidad de interactuar y hacer cambios
//dentro de nuestra base de datos, como por ejemplo; cambiar la posición! O Agregar o quitar elementos! (Mutar)

//Como mutar con arrays
var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

var masFrutas = frutas.push("Uvas"); //push lo que hará es que añadirá elementos AL FINAL del arrayl

//esto en el codigo, nos daría el siguiente arrays; 
var frutas = ["Manzana", "Platano", "Cereza", "Fresa", "Uvas"]; 

//si quisieramos quitar un elemento, haríamos
var ultimo = frutas.pop("Uvas"); //esto lo que hará es remover este elemento dentro de nuestro arrays

//si quisieramos añadir un elemento al PRINCIPIO del arrays

var primero = frutas.unshift("Uvas"); //Esto lo colocará al princpio del arrays, esto sirve para colocar un orden de prioridades
//Ejemplo: sí te dijeran que PRIMERO tienes que comprar una fruta en específico, debería colocarse de primero.

var frutas = ["Uvas", "Manzana", "Platano", "Cereza", "Fresa"];

//y sí quisieramos eliminar el elemento uqe esté AL PRINCIPIO, haríamos:

var Borrarprimero = frutas.shift("Uvas");

var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

//si quisieramos saber la posición de alguno de nuestros elementos, haríamos el siguiente codigo
var posicion = frutas.indexOf("Cereza"); 
//esto funcionaria si tuvieramos una gran lista de elementos dentro de nuestro arrays, y no podriamos calcular
//de forma fácil la posición en la cual tenemos uno de los elementos, entonces lo que haríamos es usar esta sintaxis.