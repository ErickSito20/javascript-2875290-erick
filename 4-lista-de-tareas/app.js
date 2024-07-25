const btnNovo = document.querySelector('.nuevo')
const btnBorrar = document.querySelector('.borrar')
const btnReset = document.querySelector('.borrartodo')


const list = document.querySelector('#listalibros')
const input= document.querySelector('#Lb')


const cuadrouno = document.querySelector('.cuadros')
const container=  document.querySelector('#secundario')
const tareas = document.querySelector('.tareas')

function crear(){
    
    const tarea = document.createElement('div')
    container.appendChild(tarea)
    tarea.classList.add('tarea')
    
    const lista = document.createElement('div')
    tarea.appendChild(lista)
    lista.classList.add('libros')
    lista.innerText = input.value
    const divbotones = document.createElement('div')
    divbotones.classList.add('botondiv')
    tarea.appendChild(divbotones)
    const boton1 = document.createElement('button')
    boton1.classList.add('otros')
    boton1.innerText = 'borrar'
    divbotones.appendChild(boton1)
    const boton2 = document.createElement('button')
    boton2.classList.add('otros')
    boton2.innerText = 'completar'
    divbotones.appendChild(boton2)
    
}

function borrarElemento (e){ 
    if(e.target.innerText == 'borrar'){
    
        container.removeChild(e.target.parentElement.parentElement);
    }

}
function borrarPantalla (){
    container.innerHTML = '';
}
function completarTarea (e){ 
    if(e.target.innerText == 'completar'){
        
        e.target.parentElement.parentElement.firstElementChild.style.textDecoration = 'line-through';    
    }
}

btnNovo.addEventListener('click',crear)
container.addEventListener('click',borrarElemento)
btnReset.addEventListener('click',borrarPantalla)
container.addEventListener('click',completarTarea)