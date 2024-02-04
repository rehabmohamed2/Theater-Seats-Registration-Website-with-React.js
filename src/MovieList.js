import React from 'react';
import { Link } from 'react-router-dom';
import './moviesList.css'
const films = JSON.parse(localStorage.getItem('films')) ||
    [      { id: 1, title: 'Sponge Bob', image: '../images/spong.png', year: 2020 },
    { id: 2, title: 'Spider man', image: '../images/spider.png', year: 2018 },
    { id: 3, title: 'Snow White', image: '../images/snowwhite.png', year: 2018 }
    ];

    console.log("yy", films)

function MovieList() {
    return (

<ul className="film-list" style={{ listStyle: 'none', padding: 0 }}>
  {films.map(film => (
    <li key={film.id} className="film-item" style={{ borderBottom: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <span style={{ fontSize: '18px', marginRight: '10px' }}>{film.title} ({film.year})</span>
      <img src={film.image} alt="Film" style={{ width: '300px', height: '200px', marginRight: '10px' }} />
      <Link to={`/movie/${encodeURIComponent(film.title)}`}>
        <button style={{ backgroundColor: '#007BFF', color: 'white',  padding: '8px 12px', cursor: 'pointer', borderRadius:'8px' }}>Book Me</button>
      </Link>
    </li>
  ))}
</ul>

    );
}

export default MovieList;