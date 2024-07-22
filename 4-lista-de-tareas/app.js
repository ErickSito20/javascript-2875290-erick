const btnNovo = document.querySelector('.nuevo')
const btnBorrar = document.querySelector('.borrar')
const btnReset = document.querySelector('.borrartodo')

const lista = document.querySelector('#listalibros')
const input= document.querySelector('#Lb')
function crear(){
    const libro = document.createElement('div')
    libro.innerText = input.value
    libro.classList.add('libros')

    lista.appendChild(libro)

}
btnNovo.addEventListener('click',crear)