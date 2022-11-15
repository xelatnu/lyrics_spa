/* eslint-disable react/function-component-definition */
import React from 'react';
import LyricsHeader from '../components/LyricsHeader/LyricsHeader';
import LyricsTable from '../components/LyricsTable/LyricsTable';
import LoadingSpinner from '../components/loadingSpinner/loadingSpinner';
import useLyricsSearch from '../components/hooks/useLyricsSearch';
import './App.css';

function App() {
  const [searchLyrics, { isLoading, lyricsData }] = useLyricsSearch();

  return (
    <div className="app">
      {isLoading
        ? <LoadingSpinner />
        : <LyricsHeader searchLyrics={searchLyrics} />}
      {lyricsData?.length ? <LyricsTable lyricsData={lyricsData} /> : null}
    </div>
  );
}

export default App;
