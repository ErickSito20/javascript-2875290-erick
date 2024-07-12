const sol1 = document.querySelector('.sol')
const guia = document.querySelector('.guia')

const fondo = document.querySelector('.container')
const nubes = document.querySelector('.nube')
const nube1 = document.querySelector('.uno')
const nube2 = document.querySelector('.dos')
const nube3 = document.querySelector('.tres')
const nube4 = document.querySelector('.cuatro')


function moversol(){
    sol1.style.animation= 'sol 5s linear' 
    sol1.style.backgroundColor='white'

}
function movernubes(){
    nube1.style.animation= 'uno 3s linear ' 
    nube2.style.animation= 'dos 3s linear' 
    nube3.style.animation= 'tres 3s linear' 
    nube4.style.animation= 'cuatro 3s linear' 
}
function Fondo1(){
    fondo.style.backgroundColor = 'blue' 

}

nubes.addEventListener('click', movernubes)
guia.addEventListener('click',moversol)
fondo.addEventListener('click',Fondo1)
