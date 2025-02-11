/*
    Mostrar la fecha actual
    formato:    dd/mm/yyyy      11/02/2025
*/ 
// Ubicamos elementos dentro del DOM
const frase = document.querySelector('#frase')

// Creamos un objeto de fecha
const fecha = new Date();
console.log(fecha)

// Obtenemos el número de día de mes 
let diaMes = fecha.getDate()
if( diaMes < 10 ){
    diaMes = '0' + diaMes
}
console.log(diaMes)

// Obtenemos el número de mes actual
let mes = fecha.getMonth() + 1
if ( mes < 10 ){
    mes = '0' + mes
}
console.log(mes)

// Obtenemos el número de año actual
let anio = fecha.getFullYear()
console.log(anio)

// Escribimos en el spam
    //concatenación
//frase.innerText = diaMes + '/' + mes + '/' + anio

    // interpolación   ${nombreVariable}
frase.innerText = `${diaMes}/${mes}/${anio}`
