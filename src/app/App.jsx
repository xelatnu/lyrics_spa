import React from 'react';
import LyricsHeader from '../components/LyricsHeader';
import LyricsTable from '../components/LyricsTable';
// import lyricsService from '../features/lyricsService';
import LoadingSpinner from '../components/loadingSpinner/loadingSpinner';
import useLyricsSearch from '../components/hooks/useLyricsSearch';
import './app.css';

const App = () => {
  const [searchLyrics, { isLoading, lyricsData }] = useLyricsSearch();

  return (
    <div className="app">
      {isLoading
        ? <LoadingSpinner />
        : <LyricsHeader searchLyrics={searchLyrics} />}
      {lyricsData?.length ? <LyricsTable lyricsData={lyricsData} /> : null}
    </div>
  );
};

export default App;
