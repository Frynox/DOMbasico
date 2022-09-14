var jugador
var cpu

if (jugador == "tijeras" && cpu == "papel")
{
    console.log("Ganaste");
    }
else if (jugador == "papel" && cpu == "piedra")  
{
    console.log("Ganaste");
}  
else if (jugador == "piedra" && cpu == "tijeras")
{
    console.log("Ganaste");
}
else if (jugador == cpu) {
    console.log ("Empate");
}
else {
    console.log("Perdiste");
}