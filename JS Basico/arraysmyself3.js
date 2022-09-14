var zoo = ["Pollos", "Tigres", "Leones", "Jaguares", "Monos", "Osos"];

function EnElZoo (mirar){
    console.log(`En este Zoo encuentras ${mirar}`);
}

for (var A = 0; A < zoo.length; A++ ){
    EnElZoo(zoo[A]);
}
