// Ubicamos elementos dentro del DOM
const btn = document.querySelector('#btn')
const frase = document.querySelector('#frase')
/*
    Al pulsar el botón vamos a generar un número aleatorio
    Este número debe ser un número entero entre el 0 y el 10
    Finalmente debemos mostrar el número en el párrafo
*/

function generarNumero()
{
    // Math Es un objeto que contiene muchos métodos aritméticos
    // Math.random() genera un número aleatorio entre el cero y el uno
    let numeroAleatorio = Math.random()
    console.log(numeroAleatorio)

    let numeroX10 = numeroAleatorio * 10
    console.log(numeroX10)
    
    // Math.round() Redondea un número al entero más próximo 
    let numero = Math.round(numeroX10)
    console.log(numero)

    //frase.innerText = numero
    return numero
}

btn.addEventListener(
                'click',
                () =>
                {
                    let numero = generarNumero()
                    frase.innerText = numero
                }
)