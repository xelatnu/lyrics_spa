import React from 'react';
import PropTypes from 'prop-types';

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

TableRow.defaultProps = {
  artistLink: {},
};

TableRow.propTypes = {
  song: PropTypes.string.isRequired,
  songLink: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  artistLink: PropTypes.string,
  album: PropTypes.string.isRequired,
};

export default TableRow;
