
const miInput= document.getElementById("input");
const enviar = document.getElementById('btn')
const bolita = document.getElementById('bola')


function cambiarColor(){
    
    bolita.style.marginLeft = '400px'
    bolita.style.backgroundColor = miInput.value
    bolita.style.transitionDuration ='.5s'
}

function volver(){
   
    bolita.style.marginLeft = '0px'
}
enviar.addEventListener('click', cambiarColor)
bolita.addEventListener('click',volver)
