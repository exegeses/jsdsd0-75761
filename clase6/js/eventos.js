// Ubicar elementos dentro del DOM
const btn = document.querySelector('#btn')
const frase = document.querySelector('#frase')

/*
    Dentro de JavaScript podemos escribir los controladores de eventos
    Para lograrlo utilizamos el método  addEventListener( 'evento', acción )
*/

btn.addEventListener(
                'click', 
                function()
                    {
                        frase.textContent = 'hiciste click!'
                    }
)
btn.addEventListener(
                'mouseover', 
                function()
                    {
                        frase.textContent = 'mouse sobre'
                    }
)
btn.addEventListener(
                'mouseout',
                () =>
                    {
                        frase.textContent = 'reposo'
                    }
)