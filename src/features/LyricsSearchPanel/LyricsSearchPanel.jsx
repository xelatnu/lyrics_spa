/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import './lyrics-search-panel.css';

const defValues = {
  lyrics: '',
  artist: '',
};

// eslint-disable-next-line react/prop-types
function LyricsSearchPanel({ onSearch }) {
  const [formData, setFormData] = useState(defValues);

  const onChange = (event) => {
    event.preventDefault();
    setFormData((prevData) => ({ ...prevData, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(formData);
    setFormData(defValues);
  };

  return (
    <div className="container-form">
      <h2
        title="Header"
        style={{
          color: 'white',
        }}
      >
        Search your favorite song lyrics
      </h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          data-testid="lyrics-input"
          name="lyrics"
          value={formData.lyrics}
          onChange={onChange}
          type="text"
          className="lyrics-input "
          placeholder="Type lyrics"
          required
        />
        <input
          data-testid="artist-input"
          name="artist"
          value={formData.artist}
          onChange={onChange}
          type="text"
          className="search-input "
          placeholder="Type artist"
        />
        <button data-testid="submit-button" type="submit" className="btn btn-primary">Search lyrics</button>
      </form>
    </div>
  );
}

export default LyricsSearchPanel;
