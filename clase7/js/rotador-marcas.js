const rotador = document.querySelector('#rotador')
console.log(rotador)
console.log(rotador.children)
console.log(rotador.children[0])
console.log(rotador.children[1])
console.log(rotador.children[2])

const btnAnterior = rotador.children[0]
const btnSiguiente = rotador.children[2]
const span = rotador.children[1]

const marcas = [
    'Hermès', 'Zara','Boss',
    'Aeropostale','Kingpin','Tomy',
    'Gola','Hollister','Abercrombie',
    'JCrew', 'Nike', 'Adidas'
    ]

 /* estado inicial: que se vea una marca en el span */   
 let indice = 2
 span.innerText = marcas[indice]

 // botones
 btnSiguiente.addEventListener( 'click', () =>
        {
            indice++
            if( indice == marcas.length ){
                indice = 0
            }
            span.innerText = marcas[indice]
        }
 )
 btnAnterior.addEventListener( 'click', ()=>
    {
            indice--
            if(indice < 0 ){
                indice = marcas.length - 1
            }
            span.innerText = marcas[indice]
    }) 