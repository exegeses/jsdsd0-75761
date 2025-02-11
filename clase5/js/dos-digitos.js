const frase = document.querySelector('#frase')

/* solución 1. Usando el operador módulo (%) */
let numero = 2025;
let ultimosDos = numero % 100;
console.log(ultimosDos); // 25


/* solución  2. Convirtiéndolo a cadena y extrayendo los últimos caracteres
    Puedes convertir el número en una cadena (String) 
    y usar slice() o substring() para obtener los últimos dos caracteres:
*/
let numero2 = 2025;
//let ultimosDos2 = String(numero2).slice(-2); 
let ultimosDos2 = String(numero2).substring(2); 
console.log(ultimosDos2); // "25" (como cadena)

