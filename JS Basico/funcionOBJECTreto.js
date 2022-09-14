//RETO: Una lista 

var Ciudad = [
    "Lecheria",
    "Lecheria",
    "Barcelona",
    "Puerto la Cruz",
    "Barcelona",
    "Puerto la Cruz",
    "Lecheria",
    "Barcelona",
    "Barcelona",
    "Puerto la Cruz",
    "Lecheria",
    "Barcelona",
    "Puerto la Cruz",
    "Puerto la Cruz",
    "Guanta" //15
]

var TipoCasa = ["PentHouse", "Apartamento", "Anexo", "Casa", "Casa", "Apartamento", "Mansion", "Casa", "Apartamento", "PentHouse",
"Apartamento", "Residencia", "Residencia", "Casa", "Mansion"] //15

var Precio = [5000, 3500, 1200, 3000, 2000, 750, 7000, 2000, 900, 4600, 690, 400, 1000, 1500, 9000] //15

function casas(Ciudad, TipoCasa, Precio){
    this.Ciudad = Ciudad,
    this.TipoCasa = TipoCasa,
    this.Precio = Precio
}

for(var I = 0; Ciudad.length > I && TipoCasa.length > I && Precio.length > I; I++){
    var LoopCasas = new auto(Ciudad[I], TipoCasa[I], Precio[I]);
    console.log(LoopCasas)  
}

//logica del loop: Mientras I sea menor a la longitud de las variables (arrays), I va a aumentar su valor, y esto hará que nos
//muestre el valor de I (cuando sea 0, 1, 2), como el index de nuestras variables.