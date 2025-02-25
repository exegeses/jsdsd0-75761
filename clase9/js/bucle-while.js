const lista = document.querySelector('#lista');

const marcas = [
    'Hermès', 'Zara','Boss',
    'Aeropostale','Kingpin','Tomy',
    'Gola','Hollister','Abercrombie',
    'JCrew', 'Nike', 'Adidas'
]

lista.innerHTML = ``
let n = 0

while( n < marcas.length ){
    lista.innerHTML += `<li>${marcas[n]}</li>`
    n++
}