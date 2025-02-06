
function ocultar()
{
    //caja.style.backgroundColor = 'hsl(60, 56%, 12%)'
    //caja.style.opacity = '0'
    //caja.style.visibility = 'hidden'
    caja.style.display = 'none'
}

function mostrar()
{
    //caja.style.opacity = '1'
    //caja.style.visibility = 'visible'
    caja.style.display = 'block'
}

function interruptor()
{
    if( caja.style.display == 'none' ){
        caja.style.display = 'block'
    }
    else{
        caja.style.display = 'none'
    }
}