var Frutas = ["Banana", "Fresa", "Platano", "Tomate", "Guayaba"];

function mostrarLista (lista){
    console.log(`Vas a comprar: ${lista}`); 
}

for (var I = 0; I < Frutas.length; I++){
    mostrarLista(Frutas[I]);
}