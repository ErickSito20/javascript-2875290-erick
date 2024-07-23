const btnNovo = document.querySelector('.nuevo')
const btnBorrar = document.querySelector('.borrar')
const btnReset = document.querySelector('.borrartodo')


const lista = document.querySelector('#listalibros')
const input= document.querySelector('#Lb')


const cuadrouno = document.querySelector('#cuadros')
let n = 1 
function crear(){
    const libro = document.createElement('div')
    libro.innerText = input.value
    libro.classList.add('libros')
    lista.appendChild(libro)
    const divbotones = document.createElement('div')
    cuadrouno.appendChild(divbotones)
    divbotones.classList.add('botondiv')
    const check2 =  document.createElement('button')
    check2.innerText = 'completar'

    divbotones.appendChild(check2)

    check2.classList.add('otros')
const check1 =  document.createElement('button')
    check1.innerText = 'borrar'
    check1.classList.add('otros')
    divbotones.appendChild(check1)
    
}
function completarTarea (e){ 
    e.target.style.textDecoration = 'line-through';
}


btnNovo.addEventListener('click',crear)
btnReset,addEventListener('click', borrarPantalla)
