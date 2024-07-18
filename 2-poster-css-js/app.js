const castillo = document.querySelector('.castillo')
const cielo = document.querySelector('.poster1')
const boton = document.querySelector('.boton')
const complemento = document.querySelector('.poster2')
const hP= document.querySelector('.Hp')
const potter = document.querySelector('.harry')
const malo = document.querySelector('.daco')
const logo = document.querySelector('.simbolo')

function casti (){
    castillo.style.animation = 'castle 3s 0s'
    complemento.style.animation = 'castle 3s 0s'
    cielo .style.animation = 'castle 3s 0s'

    
}
function harry(){
    potter.style.animation= 'mover 3s linear 1 0s, rotar 3s  linear 1 0s  '
      
}
function Hp(){
    hP.style.animation= 'escale 3s  1 0s, escale2 3s  1 0s '  
}
function daco(){
    malo.style.animation= 'moverd 3s linear 1 0s, rotard 3s  linear  1 0s '  
     
}
function simbolo(){
    logo.style.animation= 'rotars 3s  0s '  
}
boton.addEventListener('click',casti)
boton.addEventListener('click', Hp)
boton.addEventListener('click', harry)
boton.addEventListener('click', daco)
boton.addEventListener('click', simbolo)