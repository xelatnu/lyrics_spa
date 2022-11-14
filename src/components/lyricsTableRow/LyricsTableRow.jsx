import React from 'react';

const TableRow = ({
  song, songLink, artist, artistLink, album,
}) => (
  <tbody>
    <tr>
      <th scope="row"> </th>
      <td><a className="lyrics_link link-light" target="_blank" href={songLink} rel="noreferrer">{song}</a></td>
      <td><a className="lyrics_link link-light " target="_blank" href={artistLink} rel="noreferrer">{artist}</a></td>
      <td>{album}</td>
    </tr>
  </tbody>
);

export default TableRow;
