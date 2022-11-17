/* eslint-disable react/function-component-definition */
import React from 'react';
import LyricsHeader from '../components/LyricsHeader/LyricsHeader';
import LyricsTable from '../components/LyricsTable/LyricsTable';
import LoadingSpinner from '../components/loadingSpinner/loadingSpinner';
import useLyricsSearch from '../hooks/useLyricsSearch';
import Modal from '../components/modal/modal';
import './App.css';

function App() {
  const [searchLyrics, { isLoading, lyricsData, error }] = useLyricsSearch();

  return (
    <div className="app">
      {isLoading
        ? <LoadingSpinner />
        : error
          ? <Modal />
          : <LyricsHeader title="Welcome to Search Lyrics App" searchLyrics={searchLyrics} />}
      {lyricsData?.length ? <LyricsTable lyricsData={lyricsData} /> : null}
    </div>
  );
}

export default App;
