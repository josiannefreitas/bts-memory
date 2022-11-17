const main = document.getElementById('wings-main')

let click01 = null
let click02 = null
let encontrados = 0

renderizarCartas()

function renderizarCartas() {
  const arrDuplicado = [...photos, ...photos]
  const photosEmbaralhadas = shufleArray(arrDuplicado)
  console.log(photosEmbaralhadas)

  for (let i = 0; i < photosEmbaralhadas.length; i++) {
    let carta = document.createElement('img')

    carta.id = photosEmbaralhadas[i].id

    carta.addEventListener('click', clickCarta)
    carta.src = '../../assets/wings.jpg'

    main.appendChild(carta)
  }
}

function clickCarta(event) {
  const imgClicada = event.target
  let idClicado = event.target.id

  let photoClicada = photos.find(elemento => elemento.id == idClicado)

  imgClicada.src = photoClicada.img

  if (click01 == null) {
    click01 = imgClicada
  } else {
    click02 = imgClicada
    tesstPar()
  }
}

function tesstPar() {
  if (click01.id == click02.id) {
    console.log('Encontrei um par!')
    encontrados++
    click01 = null
    click02 = null
    if (encontrados == photos.length) {
      setTimeout(() => {
        encontrados = 0
        window.location.href = '../../index.html'
      }, 500)
    }
  } else {
    setTimeout(() => {
      click01.src = '../../assets/wings.jpg'
      click02.src = '../../assets/wings.jpg'
      console.log('Não é par!')
      click01 = null
      click02 = null
    }, 1000)
  }
}

function shufleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}
