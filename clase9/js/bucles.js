/*
*  Si queremos ejecutar un bloque de código de manera repetitiva
*  podemos utilizar los bucles o estructuras de interacción
*  ## Un bucle va ejecutar un bloque de código
*  ## mientras una condición sea verdadera
* */


function generarNumero()
{
    // Math Es un objeto que contiene muchos métodos aritméticos
    // Math.random() genera un número aleatorio entre el cero y el uno
    let numeroAleatorio = Math.random()
    console.log(numeroAleatorio)

    let numeroX10 = numeroAleatorio * 9 + 1
    console.log(numeroX10)

    // Math.round() Redondea un número al entero más próximo
    let numero = Math.round(numeroX10)
    console.log(numero)

    //frase.innerText = numero
    return numero
}

const numeroMagico = generarNumero()


/*  pedirle al usuario que ingrese un número entre el 1 y el 10
    Para adivinar el número mágico
    Si el número ingresado es igual al número mágico
        Mostramos un mensaje informando que el número fue adivinado
    Si el número ingresado es diferente informamos que no lo adivinó
* */

let check = true

while( check ) {
    let numeroUsuario = prompt(" ingrese un número entre el 1 y el 10")
    if( numeroUsuario == numeroMagico ){
        document.write('<h2>Felicitaciones! Acertaste el número mágico!</h2>')
        check = false
    }
    else if ( numeroUsuario < numeroMagico ){
        alert('te quedaste corto, intenta un número más alto')
    }
    //else if( numeroUsuario > numeroMagico ){
    else {
        alert('te pasaste, intenta un número más bajo')
    }
}