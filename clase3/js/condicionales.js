/*
    Hacer una pregunta al usuario
    - El usuario va a responder
    - Vamos a almacenar esa respuesta en memoria
*/
let respuesta = prompt('¿qué seleccionado ganó la copa del mundo Qatar 2022?')
/*
    Vamos a comparar la respuesta enviada por el usuario
    si el usuario responde 'argentina'
        entonces mostramos la palabra ¡Correcto!
    Si el usuario no responde de manera correcta
        entonces mostramos la palabra ¡Inorrecto!
*/
if ( respuesta.toLowerCase() == 'argentina' ){
    // Bloque de código a ejecutar si la condición true
    //frase.textContent = "¡Bien hecho! Respuesta correcta."
    //frase.innerText = "¡Bien hecho! Respuesta correcta."
    frase.innerHTML = '<img src="imgs/ok.png">'
}
else{
    // Bloque de código a ejecutar si la condición false
    //frase.textContent = "¡Error! Respuesta incorrecta."
    //frase.innetText = "¡Error! Respuesta incorrecta."
    frase.innerHTML = '<img src="imgs/error.png">'
}