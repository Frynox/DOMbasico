const input1 = document.querySelector('#avenida');
const input2 = document.querySelector('#Calle');
const input3 = document.querySelector('#Casa');
const input4 = document.querySelector('#Referencia');
const bCalculo = document.querySelector('#Calculo');
const pResult = document.querySelector('#usuario');

function btnResult(){
    const sumaInputs = input1.value + input2.value + input3.value + input4.value;
    pResult.append = "Tu dirección completa es: " + sumaInputs;
    console.log("Hemos recibido los datos!");
}
