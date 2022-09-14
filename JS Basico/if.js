//Las condicionales son reglas que nosotros implementamos para validar si algo es true o false
//Una de las condicionales que podemos usar, es IF

if (true) {
    console.log("Hola");
} //if es un condicionante que se aplica o se ejecuta siempre y cuando la condición sea TRUE
//en caso de que no sea verdadera, no se ejecuta, pero para esto, se puede colocar otros condicionales en dado caso que nuestro primer condicionante sea falso


if (false) { //notese el false
    console.log("Hola");
} else {
    console.log("Soyfalso");    //else es como un "ok, sí if no sirve, haremos esto."
}
// Pero... Sí nosotros quisieramos añadir un "Bueno, sí if es falso, pero otro valor es verdadero, esta condicion se cumple".
// usamos el else if:

if (false) { //notese el false
    console.log("Hola");
} else if (true) {
    console.log("Soy Falso"); 
} else {

}

//EJEMPLO REAL: Calcular si una persona es mayor de edad, sí lo es, puede votar, sí no, no puede.
var edad = 18 //esta es la opcion que nosotros colocamos

if (edad === 18) { //el primer condicional de "si esta persona tiene 18 años (que seria true)", imprimes...
    console.log("Puedes votar, será tu primera votación.");
} else if (edad > 18) { //el else if nos dice que sí no tiene 18, pero es mayor de 18, imprimiría...
    console.log("Puedes votar, de nuevo."); 
} else { //el else nos dice que si no es mayor de 18 y no tiene 18, nos suelta este mensaje dandonos a entender que somos menores.
    console.log("Aun no puedes votar");
}

//Hay otra forma de hacer condicionales y es de esta formula

condition ? true : false
//en codigo sería...
//tratemos de validar si un numero es UNO. 

var numero = 1; //nuestro accionador
          //estrictamente 1           //condicionante
var resultado = numero === 1 ? "Si, soy un UNO" : "No, no soy un UNO";