/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
          data-testid="search-input"
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
        <button data-testid="submit-button" type="submit" className="btn btn-primary">Search lyrics</button>
      </form>
    </div>
  );
}

LyricsSearchPanel.propTypes = {
  searchLyrics: PropTypes.func.isRequired,
};

export default LyricsSearchPanel;
