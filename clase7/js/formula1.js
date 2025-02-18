// Ubicamos elementos dentro del DOM
const btnRedbull = document.querySelector('#btnRedbull')
const btnMclaren = document.querySelector('#btnMclaren')
const btnFerrari = document.querySelector('#btnFerrari')
const btnMercedes = document.querySelector('#btnMercedes')
const btnAmartin = document.querySelector('#btnAmartin')

const redbull = document.querySelector('#redbull')
const mclaren = document.querySelector('#mclaren')
const ferrari = document.querySelector('#ferrari')
const mercedes = document.querySelector('#mercedes')
const amartin = document.querySelector('#amartin')

/* estado inicial */
mclaren.style.display = 'none'
ferrari.style.display = 'none'
mercedes.style.display = 'none'
amartin.style.display = 'none'

btnRedbull.addEventListener('click', () =>
    {
        redbull.style.display = 'flex'
        mclaren.style.display = 'none'
        ferrari.style.display = 'none'
        mercedes.style.display = 'none'
        amartin.style.display = 'none'
    }
)
btnMclaren.addEventListener('click', () =>
    {
        redbull.style.display = 'none'
        mclaren.style.display = 'flex'
        ferrari.style.display = 'none'
        mercedes.style.display = 'none'
        amartin.style.display = 'none'
    }
)
btnFerrari.addEventListener('click', () =>
    {
        redbull.style.display = 'none'
        mclaren.style.display = 'none'
        ferrari.style.display = 'flex'
        mercedes.style.display = 'none'
        amartin.style.display = 'none'
    }
)
btnMercedes.addEventListener('click', () =>
    {
        redbull.style.display = 'none'
        mclaren.style.display = 'none'
        ferrari.style.display = 'none'
        mercedes.style.display = 'flex'
        amartin.style.display = 'none'
    }
)
btnAmartin.addEventListener('click', () =>
    {
        redbull.style.display = 'none'
        mclaren.style.display = 'none'
        ferrari.style.display = 'none'
        mercedes.style.display = 'none'
        amartin.style.display = 'flex'
    }
)
