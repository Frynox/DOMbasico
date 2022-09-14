//switch tambien es otro condicional, que trabaja con casos; sí el caso es verdad, pasa algo, sí no es verdad, pasa otra serie de eventos
//tambien valida y generas condiciones con el switch.
//si ninguno de los casos funciona, entrariamos en el "else" del switch

var numero = 1
switch (numero) {
    case 1:
        console.log("Soy uno!");
        break;
    case 10:
        console.log("Soy diez!");
        break;
    case 100:
        console.log("Soy cien!");
        break;
    case 1000:
        console.log("Soy mil!");
        break;
    default:
        console.log("No has introducido nada:(");                   
}