import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from '../LyricsTableHeader/LyricsTableHeader';
import TableRow from '../../features/lyricsTableRow/LyricsTableRow';

// import './lyricsTable.css';

const LyricsTable = ({ lyricsData }) => (
  <table className="table table-dark table-hover">
    <TableHeader />
    {lyricsData.map(({
      song, artist, album, ...restItem
    }, index) => (
      <TableRow
          // eslint-disable-next-line react/no-array-index-key
        key={index}
        song={song}
        songLink={restItem['song-link']}
        artist={artist}
        artistLink={restItem['artist-link']}
        album={album}
      />
    ))}
  </table>
);

LyricsTable.defaultProps = {
  lyricsData: [],
};

LyricsTable.propTypes = {
  lyricsData: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default LyricsTable;
