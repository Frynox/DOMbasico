//Coerción es un metodo que se divide en dos procesos: 1) el metodo de cambiar de valor a un codigo (ejm: que sea de string a numero)
//Y 2) el metodo de obligar a cambiar un tipo de valor a otro
//Veamos el metodo numero 2

var a = 20; //number
var b = a + "";

console.log(b);
20 //si usamos typeof (para ver el tipo de valor) veremos que nos saldra string.

//tambien existe otro metodo
var c = String(a);
console.log(c);
20 //string

//y si queremos pasarlo nuevamente a numero...
var d = Number(c);
console.log(d);
20 //numero 