const lista = document.querySelector('#lista');

const marcas = [
    'Hermès', 'Zara','Boss',
    'Aeropostale','Kingpin','Tomy',
    'Gola','Hollister','Abercrombie',
    'JCrew', 'Nike', 'Adidas'
]

lista.innerHTML = ``;

for ( let n= 0; n < marcas.length; n++ ) {
    lista.innerHTML += `<li>${marcas[n]}</li>`
}