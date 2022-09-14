//el primer metodo que habiamos visto de arrays era el de mutar o modificar los datos dentro del mismo, y en este caso, veremo
//por mediante de objetos, como podemos filtrar y recibir informacion especifica dentro de nuestro arrays, con un ejemplo
//hecho mí mismo.

var Casas = [ //creamos un array, el cual por las llaves iremos creando nuestros objetos junto a las palabras claves que querramos
    {direccion: "Barcelona", costo: 50, tipo: "Alquiler"},
    {direccion: "Lecheria", costo: 150, tipo: "Alquiler"},
    {direccion: "Puerto la Cruz", costo: 500, tipo: "Compra"},
    {direccion: "Puerto la Cruz", costo: 80, tipo: "Alquiler"},
    {direccion: "Barcelona", costo: 800, tipo: "Compra"},
    {direccion: "Lecheria", costo: 1050, tipo: "Compra"},
    {direccion: "Barcelona", costo: 450, tipo: "Alquiler"},
    {direccion: "Lecheria", costo: 750, tipo: "Alquiler"},
    {direccion: "Puerto la Cruz", costo: 250, tipo: "Alquiler"},
    {direccion: "Barcelona", costo: 650, tipo: "Compra"}
]

var direccion = Casas.filter(function (direcciones){ //el .filter funciona como un nuevo array, es por esto que hacemos un nuevo var.
    return direcciones.direccion == "Barcelona" && direcciones.tipo == "Compra"
});

//lo que significa este codigo, es que nos regrese, la informacion especifica de: direccion barcelona, y que sean casas de compras.
//ejemplo un poco mas detallado.

var Computadoras = [
    {procesador: "Intel", modelo: "5", memoria: 6, disco: 500, costo: 500},
    {procesador: "Intel", modelo: "7", memoria: 2, disco: 500, costo: 250},
    {procesador: "Intel", modelo: "9", memoria: 10, disco: 500, costo: 700},
    {procesador: "Ryzen", modelo: "X", memoria: 8, disco: 500, costo: 600},
    {procesador: "Ryzen", modelo: "10", memoria: 16, disco: 500, costo: 1500},
]

var datos = Computadoras.filter(function(dato){
    return dato.procesador === "Intel" && dato.costo <= 500
});