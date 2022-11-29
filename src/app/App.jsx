/* eslint-disable react/function-component-definition */
import React from 'react';
import Modal from '../components/modal/modal';
import { useLazyGetLyricsQuery } from '../service/LyricsServiceApi';
import './App.css';
import LyricsSearchPanel from '../features/LyricsSearchPanel/LyricsSearchPanel';
import LyricsTable from '../features/LyricsTable';
import Spinner from '../components/spinner/spinner';

function App() {
  const [getLyrics, {
    data: lyrics = [],
    isFetching,
    isError,
  }] = useLazyGetLyricsQuery();

  if (isFetching) {
    return <Spinner />;
  }
  if (isError) {
    return (
      <div className="app">
        <LyricsSearchPanel onSearch={getLyrics} />
        <Modal />
      </div>
    );
  }

  return (
    <div className="app">
      <LyricsSearchPanel onSearch={getLyrics} />
      {lyrics.length ? <LyricsTable lyrics={lyrics} /> : null}
    </div>
  );
}

export default App;
