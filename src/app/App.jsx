import React, { useState } from 'react';
import LyricsHeader from '../components/LyricsHeader';
import LyricsTable from '../components/LyricsTable';
import lyricsService from '../features/lyricsService';
import LoadingSpinner from '../components/loadingSpinner/loadingSpinner';
import './app.css';

function App() {
  const [lyricsData, setLyricsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchLyrics = async ({ lyrics, artist }) => {
    try {
      setIsLoading(true);
      const res = await lyricsService.getLyrics(lyrics, artist);
      setLyricsData(res);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      alert('Please wait a few minutes before try again');
    }
  };

  return (
    <div className="app">
      {isLoading ? <LoadingSpinner />
        : <LyricsHeader searchLyrics={searchLyrics} />}
      {lyricsData.length ? <LyricsTable lyricsData={lyricsData} /> : null}
    </div>
  );
}

export default App;
