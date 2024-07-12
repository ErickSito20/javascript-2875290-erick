const sol1 = document.querySelector('.sol')
const fondo = document.querySelector('.container')
const nubes = document.querySelector('.nube')
const nube1 = document.querySelector('.uno')
const nube2 = document.querySelector('.dos')
const nube3 = document.querySelector('.tres')
const nube4 = document.querySelector('.cuatro')


function moversol(){
    sol1.style.animation= 'sol 5s linear' 

}
function movernubes(){
    nube1.style.animation= 'uno 5s linear' 
    nube2.style.animation= 'dos 5s linear' 
    nube3.style.animation= 'tres 5s linear' 
    nube4.style.animation= 'cuatro 5s linear' 
}
function Fondo1(){
    sol1.style.backgroundColor = 'black' 

}

nubes.addEventListener('click', movernubes)
sol1.addEventListener('click',moversol)
fondo.addEventListener('click',Fondo1)
