var animales = ["Pajaro", "Perro", "Gato"];

function verAnimales(mirar){
    console.log(`Esto es un ${mirar}`);
}

for(var mirar of animales){
    verAnimales(mirar);
}