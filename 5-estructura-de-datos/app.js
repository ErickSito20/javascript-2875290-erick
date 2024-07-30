const container = document.querySelector('.container')

peliculas.forEach( element => {
const card = document.createElement('div')
card.classList.add('card')

    card.innerHTML = `
    <section class="tarjeta">
        <div id="uno">
            <img src="${element.imagen}" alt="">
        </div>
        <div id="dos">
            <div id="id"><h3 class="title"> ${element.id}</h3></div>
            <div id="name"><h3 class="title">nombre: ${element.nombre}</h3></div>
            <div id="artista"><h3 class="title">artista: ${element.artista}</h3></div>
            <div id="year"><h3 class="title">año: ${element.year}</h3></div>
            <div id="genero"><h3 class="title">género: ${element.genero}</h3></div>
        </div>
    </section>
    `
    container.appendChild(card)
})