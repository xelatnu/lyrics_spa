/* eslint-disable react/prop-types */
import React from 'react';

const LyricsTable = ({ lyrics }) => (
  <table data-testid="lyricsTable" className="table table-dark table-hover">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Song</th>
        <th scope="col">Artist</th>
        <th scope="col">Album</th>
      </tr>
    </thead>
    {lyrics?.map(({
      song, artist, album, ...restItem
    }, index) => {
      console.log(song);

      return (
        <tbody>
          <tr>
            <th scope="row">{index + 1}</th>
            <td><a className="lyrics_link link-light" target="_blank" href={restItem['song-link']} rel="noreferrer">{song}</a></td>
            <td><a className="lyrics_link link-light " target="_blank" href={restItem['artist-link']} rel="noreferrer">{artist}</a></td>
            <td><a className="lyrics_link link-light " target="_blank" href={restItem['album-link']} rel="noreferrer">{album}</a></td>
          </tr>
        </tbody>
      );
    })}
  </table>
);

export default LyricsTable;
