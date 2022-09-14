// Tenemos funciones Declarativas y de Expresion
// declarativas

function miFuncion() {
    return 3;
}

miFuncion();


// Expresion

var miFuncion = function(a,b){
    return a + b; 
}

miFuncion(); 

// Como podriamos hacer una funcion para sumas
function sumar(a,b) {
    var resultado = a + b;
    return resultado;
}
// Uso básico de return (pedir resultado)
//Otra forma de programarlo sería

function sumar(a,b) {
    return a + b;
}