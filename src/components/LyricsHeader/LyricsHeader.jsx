import React from 'react';
import LyricsSearchPanel from '../LyricsSearchPanel/LyricsSearchPanel';

const LyricsHeader = ({ searchLyrics }) => (
  <header className="app-header">
    <h1>
      Search your favorite song lyrics
    </h1>
    <LyricsSearchPanel searchLyrics={searchLyrics} />
  </header>
);
export default LyricsHeader;
