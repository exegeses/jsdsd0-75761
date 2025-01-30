 /*
    - Pedimos al usuario que ingrese su nombre
    - Una vez que el usuario ingresa su nombre, 
        almacenamos ese dato en memoria
    - Escribimos el nombre de usuario en el documento
 */

    let nombreUsuario = prompt('ingrese su nombre')
    document.write(nombreUsuario)

/*
    Vamos a escribir dentro del span con el id 'frase'
*/
// frase.innerText = 'éste es el innerText'
frase.innerText = nombreUsuario


pepito.innerText = 'esto es el innerText'