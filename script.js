function renderFilm(film) {
  const section = document.createElement('section')
  document.body.appendChild(section)

  const image = document.createElement('img')
  image.classList.add('image_film')
  image.alt = 'image du film'
  image.src = film['image']
  section.appendChild(image)

  const details = document.createElement('div')
  details.classList.add('details')
  section.appendChild(details)

  const titre = document.createElement('span')
  titre.classList.add('titre')
  titre.textContent = `${film['title']} (${film['year']})`
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
  note.textContent = film['rating']
  classification.appendChild(note)

  const mesfavoris = document.createElement('div')
  notes.appendChild(mesfavoris)

  const favoris = document.createElement('img')
  favoris.classList.add('favoris')
  favoris.alt = 'étoille'

  if (film['isFavorited']) favoris.src = 'assets/favori-fill.svg'
  else favoris.src = 'assets/favori.svg'

  mesfavoris.appendChild(favoris)

  const favoris_info = document.createElement('span')
  favoris_info.textContent = 'Favoris'
  mesfavoris.appendChild(favoris_info)

  const paragraphe = document.createElement('p')
  paragraphe.textContent = film['description']
  section.appendChild(paragraphe)
}

const movies = [
  {
    image:
      'https://img.elo7.com.br/product/original/3FBA809/big-poster-filme-batman-2022-90x60-cm-lo002-poster-batman.jpg',
    title: 'Batman',
    rating: 9.2,
    year: 2022,
    description: 'Description du film…',
    isFavorited: true
  },
  {
    image:
      'https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg',
    title: 'Avengers',
    rating: 9.2,
    year: 2019,
    description: 'Description du film…',
    isFavorited: false
  },
  {
    image:
      'https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg',
    title: 'Doctor Strange',
    rating: 9.2,
    year: 2022,
    description: 'Description du film…',
    isFavorited: false
  }
]

movies.forEach(movie => renderFilm(movie))
