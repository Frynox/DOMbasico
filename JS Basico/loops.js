//Los loops, o ciclos, es una manera "rapida y sencilla" de hacer que una tarea o funcion se pueda repetir automaticamente
//sin nosotros tener la necesidad de hacerlo manualmente, se cumple hasta que la función deje de ser verdad.
//¿Cuantas formas y/o ciclos existen?

//creemos un arrays.
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"]; //Nuestra tarea es crear un loop en el cual salude automaticamente
//a los estudiantes.

//creamos la función

function saludarEstudiantes(estudiante){
        console.log(`Hola, ${estudiante}`) //Alt + 96. Comillas invertidas, nos hace colocar un string y a la vez llamar a una variable.
}

//for() {} esta es la sintaxis y se parece mucho a la de una función. En los parentesis es donde vamos a trabajar cómo se va a manejar el loop

//en for, creamos una variable que se va a llamar I (casi siempre es así), a esta, colocaremos que tendrá un valor igual a 0
//realmente puedes llamarlo de otra manera, pero es recomendable trabajarlo de esta forma.
//despues, se le coloca un ; porque básicamente estaríamos haciendo 3 comandos en uno solo, donde estaríamos dando unas
//pautas para nuestro loop se ejecute, como sí estuviéramos dandole las instrucciones.
//desués, I será menor a estudiantes.length (recordemos que .length es la longitud de la variable estudiantes)
//Sí esto se cumple, mientras I sea < a estudiantes, I, va a aumentar +1. 

for(var i = 0; i < estudiantes.length; i++){ 
    saludarEstudiantes(estudiantes[i]);
} 

//Explicando este comando, básicamente, mientras todo lo que tenemos en () se cumpla, nuestro for enviará a nuestra función
//saludarEstudiantes la información que el for está ejecutando, en este caso, mostrarle 