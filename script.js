import { API_KEY, language } from './api.js'

async function getFilmsPopualires() {
  const fetchReponse = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=${language}`
  )

  const film = await fetchReponse.json()

  const resultats = film.results

  resultats.forEach(film => renderFilm(film))
}

window.onload = async function () {
  getFilmsPopualires()
}

function renderFilm(film) {
  const isFavorited = false

  const section = document.createElement('section')
  document.body.appendChild(section)

  const image = document.createElement('img')
  image.classList.add('image_film')
  image.alt = 'image du film'
  image.src = `https://image.tmdb.org/t/p/w500${film['poster_path']}`
  section.appendChild(image)

  const details = document.createElement('div')
  details.classList.add('details')
  section.appendChild(details)

  const annee = new Date(film['release_date']).getFullYear()
  const titre = document.createElement('span')
  titre.classList.add('titre')
  titre.textContent = `${film['title']} (${annee})`
  details.appendChild(titre)

  const notes = document.createElement('div')
  notes.classList.add('notes')
  details.appendChild(notes)

  const classification = document.createElement('div')
  notes.appendChild(classification)

  const etoille = document.createElement('img')
  etoille.alt = 'étoille'
  etoille.src = 'assets/etoille.svg'
  classification.appendChild(etoille)

  const note = document.createElement('span')
  note.classList.add('note')
  note.textContent = film['vote_average']
  classification.appendChild(note)

  const mesfavoris = document.createElement('div')
  notes.appendChild(mesfavoris)

  const favoris = document.createElement('img')
  favoris.classList.add('favoris')
  favoris.alt = 'étoille'

  if (isFavorited) favoris.src = 'assets/favori-fill.svg'
  else favoris.src = 'assets/favori.svg'

  mesfavoris.appendChild(favoris)

  const favoris_info = document.createElement('span')
  favoris_info.textContent = 'Favoris'
  mesfavoris.appendChild(favoris_info)

  const paragraphe = document.createElement('p')
  paragraphe.textContent = film['overview']
  section.appendChild(paragraphe)
}
