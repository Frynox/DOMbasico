var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"]; //creamos nuestro array

function saludarEstudiantes(estudiante){  //sacamos nuestra funcion con el parametro () que es una variable sin definir
    console.log(`Hola, ${estudiante}`); 
}

while(estudiantes.length > 0){ //mientras la longitud de estudiantes (en este caso, 3) sea mayor a 0, se cumple el loop
        var estudiante = estudiantes.shift(); //le damos valor a la variable estudiante, en la cual usamos estudiantes.shift que lo que hace es quitarle 1 elemento a nuestro array
        saludarEstudiantes(estudiante); //sacamos nuestra funcion para que se cumpla.
}

//Basicamente, lo que hace este loop es que mientras la longitud sea mayor a 0, se va a ir reduciendo el array (estudiantes.shift)
//Lo cual, dentro del loop, lo que va a hacer esto es ir mostrando la lista de estudiantes (saludarEstudiantes())
//Una vez este while, se haya reducido a 0 (y haya mostrado todos los estudiantes), parará.