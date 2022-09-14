
//esta es la manera de nosotros poder conectar nuestro documento HTML a un código Javascript, el script
//es la cual nos va a ayudar a poder ejecutarlo, este método, se llama Manipulación del DOM.

//¿Por que no hacerlo en el mismo HTML? bueno, la respuesta es sencilla, al trabajar con proyectos
//grandes, se vuelve tedioso a la hora de revisarlo, es por eso que la mejor manera de realizar esto
// es a través de enlazar HTML con JS.

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const botton = document.querySelector('#btnCalcular');

//Lo que queremos aprender en esta clase, es saber como a través de la consola nos podemos enterar
//De lo que los usuarios colocan, para esto, recibiremos informacion a través de un console.log
//Sí en uno de nuestros inputs colocan información, ¿Cómo?, con el siguiente comando:

// input onChange="console.log('cambió el input') id="Calculo2" placeholder ="Escribe algo aquí" /

//Sin embargo, hacer esto dentro de nuestro archivo HTML, realmente es MUCHÍSIMO trabajo y muchas líneas
//de código, para esto, siguiendo la misma idea de enlazar nuestros archivos js y html, haremos esto
//por medio de funciones.

// function btnOnClick (){
//    console.log('Escuchando el evento de Click');
//}

//sí quisiéramos unir los resultados del usuario cuando ingresa contenido en los dos inputs, tendríamos

const parrafoResult = document.querySelector('#resultado');

function btnOnClick(){
    const sumaInputs = input1.value + input2.value;
    parrafoResult.innerText = "Resultado: " + sumaInputs;
    console.log(input1.value + input2.value);
}
