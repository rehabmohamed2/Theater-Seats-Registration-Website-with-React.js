import React, { useState, useEffect } from 'react';
import './AdminStyles.css';
import FilmForm from './FilmForm';

function FilmList({ films, onEdit }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {films.map((film) => (
        <li key={film.id} style={{ borderBottom: '1px solid #ccc', padding: '10px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ flex: 1, marginRight: '10px',color:'white' }}>
            <div>
              <strong>{film.title}</strong> ({film.year})
            </div>
            <button style={{ backgroundColor: '#007BFF', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer', borderRadius: '4px' }} onClick={() => onEdit(film)}>
          Edit
        </button>
          </div>
          <img src={film.image} alt="Film" style={{ width: '100px', height: 'auto', marginRight: '10px' }} />
        </li>
      ))}
    </ul>

  );
}

function AdminPage() {
  const [films, setFilms] = useState(
    JSON.parse(localStorage.getItem('films')) || [
      { id: 1, title: 'Sponge Bob', image: '../images/spong.png', year: 2020 },
      { id: 2, title: 'Spider man', image: '../images/spider.png', year: 2018 },
      { id: 3, title: 'Snow White', image: '../images/snowwhite.png', year: 2018 }
    ]
  );

  const [editingFilm, setEditingFilm] = useState(null);
  const [showFilmForm, setShowFilmForm] = useState(false);

  const handleEdit = (film) => {
    setEditingFilm(film);
    setShowFilmForm(true);
  };

  const handleAddFilm = (newFilm) => {
    setFilms([...films, { ...newFilm, id: Date.now() }]);
    localStorage.setItem('films', JSON.stringify([...films, { ...newFilm, id: Date.now() }]));
    setShowFilmForm(false);
  };

  const handleUpdateFilm = (updatedFilm) => {

    console.log(updatedFilm)
    setFilms((prevFilms) => {
      const updatedFilms = prevFilms.map((film) =>
        film.id === updatedFilm.id ? updatedFilm : film
      );

      localStorage.setItem('films', JSON.stringify(updatedFilms));
      setShowFilmForm(false);
      return updatedFilms;
    });
  };

  const openFilmForm = () => {
    setEditingFilm(null);
    setShowFilmForm(true);
  };

  const closeFilmForm = () => {
    setShowFilmForm(false);
  };

  return (
<div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
  <div style={{ backgroundColor: '#007BFF', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '8px' }}>
    <h1 style={{ fontSize: '24px', color: 'white', margin: 0 }}>Film List</h1>
    <button onClick={openFilmForm} style={{ fontSize: '16px', color: 'white', fontWeight: 'bold', backgroundColor: 'transparent', border: '1px solid white', borderRadius: '4px', padding: '8px', cursor: 'pointer' }}>
      Add Film
    </button>
  </div>

  <FilmList films={films} onEdit={handleEdit} />

  {showFilmForm && (
    <FilmForm
      film={editingFilm}
      onSubmit={editingFilm ? handleUpdateFilm : handleAddFilm}
      onClose={closeFilmForm}
    />
  )}
</div>



  );
}

export default AdminPage;
