import React from 'react';
import TableHeader from '../LyricsTableHeader/LyricsTableHeader';
import TableRow from '../lyricsTableRow/LyricsTableRow';
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
export default LyricsTable;
