var estudiantes = ["Daniela", "Amanda", "Neil", "Cesar"];

function saludarEstudiantes(lista){
    console.log(`Hola, ${lista}`);
}

for (var I = 0; I < estudiantes.length; I++){
    saludarEstudiantes(estudiantes[I]);
}