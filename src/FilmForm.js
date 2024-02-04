import React, { useState } from 'react';

const FilmForm = ({ film, onSubmit,onClose }) => {
  const [title, setTitle] = useState(film ? film.title : null);
  const [image, setImage] = useState(film ? film.image : null);
  const [year, setYear] = useState(film ? film.year : null);
  const [id, setId] = useState(film ? film.id : null);

  console.log(film)
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({id:id,title, image: image, year: year });
  };

  const handleImageChange = (e) => {
    console.log(e)
    const selectedFile = e.target.files[0];
    setImage('../images/'+selectedFile.name);
  };

  const formContainerStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    zIndex: 1,
    width: '300px', // Adjust the width as needed
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    fontSize: '14px',
    margin: '8px 0',
    boxSizing: 'border-box',
  };

  const textareaStyle = {
    width: '100%',
    padding: '8px',
    fontSize: '14px',
    minHeight: '100px',
    margin: '8px 0',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    padding: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '4px',
    marginTop: '10px',
    marginRight: '8px',
  };

  const closeButtonStyle = {
    backgroundColor: '#ccc',
    color: 'white',
    border: 'none',
    padding: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '4px',
    marginTop: '10px',
  };

  return (
<div style={formContainerStyle}>
  <form onSubmit={handleSubmit}>
    <label style={labelStyle}>
      Title:
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={inputStyle}
        required
      />
    </label>


    <label style={labelStyle}>
      {film ? 'New ' : ''}Image:
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ margin: '8px 0' }} // Adjust styling as needed
        required={!film} // Image is not required when editing
      />
    </label>

    <label style={labelStyle}>
      Year:
      <input
        type="text"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        style={inputStyle}
        required
      />
    </label>
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <button type="submit" style={{ ...buttonStyle, marginRight: '10px' }} disabled={!title || !year}>
        {film ? 'Edit' : 'Add'}
      </button>
      <button type="button" onClick={onClose} style={closeButtonStyle}>
        Close
      </button>
    </div>
  </form>
</div>

  );
};

export default FilmForm;
