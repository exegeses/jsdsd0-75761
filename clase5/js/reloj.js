/*
    Mostrar un reloj digital
    formato:   hh:mm:ss         11:30:15
*/
// Ubicamos el elemento dentro del DOM
const frase = document.querySelector('#frase')

// Declaramos funciones de control
function tiempo()
{
    // Creamos un objeto de fecha
    const fecha = new Date()

    // Obtenemos el número correspondiente a las horas
    let horas = fecha.getHours()
    if( horas < 10 ){
        horas = '0' + horas
    }
    console.log('horas:', horas)

    // Obtenemos el número correspondiente a los minutos
    let minutos = fecha.getMinutes()
    if( minutos < 10 ){
        minutos = '0' + minutos
    }
    console.log('minutos:', minutos)

    // Obtenemos el número correspondiente a los segundos
    let segundos = fecha.getSeconds()
    if( segundos < 10 ){
        segundos = '0' + segundos
    }    console.log('segundos:', segundos)

    // Mostramos el reloj en el spam con el id frase
    frase.innerText = horas + ':' + minutos + ':' + segundos
}

// Invocamos la función
tiempo()

// La función setInterval() Sirve para actualizar el llamado a otra función
setInterval( tiempo, 1000 )