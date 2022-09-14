//Hay una forma de automatizar la entrada de objetos si por ejemplo tuviéramos una gran lista de carros, si hiciéramos los comandos
//manuales, nos tomaría mucho tiempo poder terminar nuestro código. Existe una alternativa muy importante que se llaman
//Funciones Constructoras.

//como su nombre lo indica de esta clase, usaremos una funcion.
                  //al ser una funcion, debemos llamarla como quisieramos que se llamara nuestro objeto y a la vez,
function auto(marca, modelo, annio) { //colocar nuestros parametros de la funcion, en este caso, las palabras claves.
    this.marca = marca;    //esto lo que hace es crear nuestra palabra clave (como en la clase de objetos), y, enlazarlo     
    this.modelo = modelo;  //con la propiedad de la función.
    this.annio = annio;
}

//Con esta funcion, lo que hacemos es registrar en el código una "variable" que luego puedo ser rellenada de una forma más práctica
//haciendo el siguiente comando

//creamos una nueva variable, en este caso; miAuto

var autoNuevo = new auto("Tesla", "Model 3", 2020); 
//new, es una nueva propiedad que lo que hace, es crear una subinstancia del objeto principal que tenemos, es decir, que nuestro
//objeto auto (funcion), podemos crear subcategorias con nuestro comando "new", esto nos ayuda en este caso para crear nuevas listas
//dentro de nuestro objeto/funcion constructora.

