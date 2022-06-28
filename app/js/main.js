// Const and variables declaration
const artistsUl = document.getElementById('artists-ul');
const more = document.getElementById('more');

// Artists array of objects artist
const artists = [
  {
    artistID: 1,
    name: 'Chidinma Abara',
    position: 'Photographic artist',
    biography: 'Chidinma was born in 1995, she studied'
            + 'photography in the Royal College of Art.'
            + 'She specializes in contemporary photography.',
    photo: './images/artist1.jpg',
  },
  {
    artistID: 2,
    name: 'Allen Talbot',
    position: 'Sculpture artist',
    biography: 'Allen studied sculpture at the Hornsey College of Art in London. His sculptures'
            + 'have a strong environmental message.',
    photo: './images/artist5.jpg',
  },
  {
    artistID: 3,
    name: 'Kiran Obryan',
    position: 'Sculpture artist',
    biography: 'His sculpture style captures movement and essence in his sculptures in a unique way.',
    photo: './images/artist4.jpg',
  },
  {
    artistID: 4,
    name: 'Shirley Adams',
    position: 'Strip cartoonist',
    biography: 'Shirley was born in United States in 1980. Her comics reflect everyday life with'
            + 'irony and black humor.',
    photo: './images/artist3.jpg',
  },
  {
    artistID: 5,
    name: 'Darío Verdesoto',
    position: 'Surrealist painter',
    biography: 'Darío was born in El Salvador, his art represents the subconscious of ociety,'
            + 'using impressionism techniques.',
    photo: './images/artist6.jpg',
  },
  {
    artistID: 6,
    name: 'Ana Marin',
    position: 'Graphic design',
    biography: 'Ana was born in Spain in 1987. Her works are marked by a strong sense of protest'
            + 'against current problems such as war and famine.',
    photo: './images/artist2.jpg',
  },
];

// ------------------Generate artists section-----------------//
function createArtistli(artist) {
  const artistLi = document.createElement('li');
  const htmlLi = `<li>
        <div id="photo-artist">
            <div class="artist-photo-frame"></div>
            <img src="${artist.photo}" alt="${artist.name}" />
        </div>
        <div class="artist-info">
            <h3 id="name">${artist.name}</h3>
            <h4 id="position">${artist.position}</h4>
            <hr id="deco">
            <p id="biography">${artist.biography}</p>
        </div>
    </li>`;
  artistLi.innerHTML = htmlLi;
  return artistLi;
}

window.onload = () => {
  artists.forEach((artist) => {
    const li = createArtistli(artist);
    if (artist.artistID > 2) {
      li.classList.add('hide-artist-li');
    }
    artistsUl.appendChild(li);
  });
}

more.addEventListener('click', () => {
  for (let i = 0; i < artistsUl.children.length; i += 1) {
    if (i > 1) {
      artistsUl.children[i].classList.toggle('hide-artist-li');
    }
  }
  if (artistsUl.lastChild.classList.contains('hide-artist-li')) {
    more.innerHTML = 'MORE <i class="fa-solid fa-angle-down"></i>';
  } else {
    more.innerHTML = 'LESS <i class="fa-solid fa-angle-up"></i>';
  }
});