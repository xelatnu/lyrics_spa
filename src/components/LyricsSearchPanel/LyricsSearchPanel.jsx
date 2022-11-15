/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import './lyrics-search-panel.css';

const defValues = {
  lyrics: '',
  artist: '',
};

function LyricsSearchPanel({ searchLyrics }) {
  const [formData, setFormData] = useState(defValues);

  const onChange = (event) => {
    event.preventDefault();
    setFormData((prevData) => ({ ...prevData, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchLyrics(formData);
    setFormData(defValues);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="lyrics"
          value={formData.lyrics}
          onChange={onChange}
          type="text"
          className="search-input "
          placeholder="Type lyrics"
          required
        />
        <input
          name="artist"
          value={formData.artist}
          onChange={onChange}
          type="text"
          className="search-input "
          placeholder="Type artist"
        />
        <button type="submit" className="btn btn-primary">Search lyrics</button>
      </form>
    </div>
  );
}

export default LyricsSearchPanel;
