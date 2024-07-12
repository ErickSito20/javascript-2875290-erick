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
function movernube1(){
    nube1.style.animation= 'uno 3s linear '  
}
function movernube2(){
    nube2.style.animation= 'dos 3s linear' 
    
}
function movernube3(){
   
    nube3.style.animation= 'tres 3s linear' 
     
}
function movernube4(){
 
    nube4.style.animation= 'cuatro 3s linear' 
}
function Fondo1(){
    fondo.style.backgroundColor = 'blue' 

}

nube1.addEventListener('click', movernube1)
nube2.addEventListener('click', movernube2)
nube3.addEventListener('click', movernube3)
nube4.addEventListener('click', movernube4)
guia.addEventListener('click',moversol)
fondo.addEventListener('click',Fondo1)
