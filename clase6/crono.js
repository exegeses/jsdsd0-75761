const reloj = document.querySelector('#reloj')
const cronom = document.querySelector('#cronom')
let intervalo = null;
let milisegundos = 0;
let segundos = 0;
let minutos = 0;
let numeroguardado = "0:0:0";

function actualizarTiempo() {
    reloj.innerText = `${minutos}:${segundos}:${milisegundos}`;
}
function iniciar(){
    if (!intervalo) {  
        intervalo = setInterval(() => {
            milisegundos += 10;
            if (milisegundos >= 1000) {
                milisegundos = 0;
                segundos++;
            }
            if (segundos >= 60) {
                segundos = 0;
                minutos++;
            }
            // escribimos en el reloj
            actualizarTiempo();
            
        }, 10);
    }
}
function pausar() {
    clearInterval(intervalo);
    intervalo = null; 
    reloj.innerText = `${minutos}:${segundos}:${milisegundos}`;
    cronom.innerText = `${minutos}:${segundos}:${milisegundos}`;
}

function reiniciar() {
    milisegundos = 0;
    segundos = 0;
    minutos = 0;
    actualizarTiempo();
}
function reiniciarvalor() {
    cronom.innerText = numeroguardado
}