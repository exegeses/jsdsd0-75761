const frase = document.querySelector('#frase')
const marcas = [
                'Hermès', 'Zara','Boss',
                'Aeropostale','Kingpin','Tomy',
                'Gola','Hollister','Abercrombie',
                'JCrew'
                ]
// typeof() Sirve para ver el tipo de datos                
console.log( typeof(marcas) )               
console.log(marcas)  
// Muestra información en formato tabla
console.table(marcas)              

// Escribimos en el span
frase.innerText = marcas[2]
