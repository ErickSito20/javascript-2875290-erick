const boton = document.querySelector('#btncrear')
const listacolores = document.getElementById('listacolores')
const main = document.getElementById('main')

function color (){
 const ball = document.createElement('div')
 ball.classList.add('bolita')
 main.appendChild(ball)
 ball.style.backgroundColor= listacolores.value
}
boton.addEventListener('click', color)

