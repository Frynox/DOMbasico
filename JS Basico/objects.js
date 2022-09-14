//cuando queremos darle propiedades a una variable, o básicamente traer algo del mundo físico a nuestro entorno de 
//javascript, a este se le denomina un "objeto", y de esto consta bastante JS, de un lenguaje de programación orientado
//a objetos.

//Cómo crear un objeto
var Objeto = {}; //esta es la sintaxis, dentro de nuestros {} es donde vamos a encontrar las propiedades del objeto.

//por ejemplo, un carro:

var miAuto = {            //marca, modelo y annio representan nuestras palabras claves, las cuales en el codigo
    marca: "Toyota",      //podemos usar para especificar la información que queremos conocer sobre nuestro objeto.
    modelo: "Corolla",    //Toyota, Corolla y 2020 son las descripciones de nuestro objeto.
    annio: 2020
};

miAuto.marca //cuando queremos saber una información específica del objeto, colocamos nuestro objeto seguido de un .
//seguido de la palabra clave que queremos utilizar, en este caso, marca.

"Toyota" //es lo que nos saldría como resultado.
//pero, hay una forma de colocarle una función a nuestro objeto? claro que sí. Y es de esta manera:

var miAuto = {    
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){ //creamos la palabra clave, seguido de la sintaxis de una función
        console.log(`Auto ${this.modelo}, Año ${this.annio}`); //ya explicaremos que es this! 
    }
};

//esto, sí lo guardamos, podemos sacar a revelar la información con este comando
miAuto.detalleDelAuto(); //llamando la palabra clave como una función, usando las ().

//¿Qué es this?, bueno, this vendría siendo una variable que hace referencia a nuestro objeto, en este caso this = miAuto.
//Básicamente no podríamos llamar a nuestro objeto miAuto dentro de las mismas propiedades, por esta razón usamos this.