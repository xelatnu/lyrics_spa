import React from 'react';
import PropTypes from 'prop-types';
import LyricsSearchPanel from '../../features/LyricsSearchPanel/LyricsSearchPanel';

const LyricsHeader = ({ searchLyrics, title }) => (
  <header className="app-header">
    <h1 data-testid="header-1">
      {title}
    </h1>
    <h2 title="Header">
      Search your favorite song lyrics
    </h2>
    <LyricsSearchPanel searchLyrics={searchLyrics} />
  </header>
);
LyricsHeader.defaultProps = {
  title: '',
};

LyricsHeader.propTypes = {
  searchLyrics: PropTypes.func.isRequired,
  title: PropTypes.string,
};

export default LyricsHeader;
