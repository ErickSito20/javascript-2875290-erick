const castillo = document.querySelector('.castillo');
const cielo = document.querySelector('.poster1');
const buton = document.querySelector('.boton');
const complemento = document.querySelector('.poster2');
const hP= document.querySelector('.Hp');
const potter = document.querySelector('.harry');
const malo = document.querySelector('.daco');
const logo = document.querySelector('.simbolo');


function activar (){
    castillo.style.animation = "castle 3s 0s";
    cielo.style.animation = "castle 3s 0s";
    complemento.style.animation = "castle 3s 0s";
    hP.style.animation = " escale 3s  1 0s, escale2 3s  1 0s";
    potter.style.animation = "mover 3s linear 1 0s, rotar 3s  linear 1 0s";
    malo.style.animation = "moverd 3s linear 1 0s, rotard 3s  linear  1 0s";
    logo.style.animation = "rotars 3s  0s";

    
}
buton.addEventListener('click', activar)
