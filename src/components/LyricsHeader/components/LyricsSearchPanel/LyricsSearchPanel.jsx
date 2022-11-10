import { useState } from 'react';
import './lyrics-search-panel.css';
import { lyricsService } from '../../../../features/lyricsService';

const SearchPanel = ({ setLyricsData }) => {
  const [lyrics, setLyrics] = useState('');
  const [artist, setArtist] = useState('');


  const searchLyricst = async () => {
    const res = await lyricsService.getLyrics(lyrics, artist);
    setLyricsData(res);

  }

  return (
    <div>
      <input
        value={lyrics}
        onChange={(e) => setLyrics(e.target.value)}
        type="text"
        className='search-input '
        placeholder='Type lyrics' />
      <input
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        type="text"
        className='search-input '
        placeholder='Type artist' />
      <button type="submit" className='btn-light' onClick={searchLyricst}>Search lyrics</button>
    </div>
  )
}

export default SearchPanel;