// Hoisting 

console.log(minombre)

var minombre = "Neil"

// ocurre cuando colocamos un console o function antes de declarar y/o inicializar una variable
// lo que ocurre en la maquina es que no encuentra la varible que nosotros tipeamos y por esto el navegador o JS
// busca la solución colocando la variable con un valor de undefined.

var minombre = undefined;

console.log(minombre);

var minombre = "Neil"

// asi se veria en el navegador tratando de descifrar nuestro código. 
// Este Hoisting también ocurre con las funciones

hey();

function hey() {
    console.log("Hola " + minombre);
}