// ubicamos elemento dentro del DOM
const frase = document.querySelector('#frase')

let numero = 0

function incrementar()
{
    //numero = numero + 1
    numero ++

    // Mostramos el número en el spam
    frase.textContent = numero
}

incrementar()
setInterval(incrementar)
