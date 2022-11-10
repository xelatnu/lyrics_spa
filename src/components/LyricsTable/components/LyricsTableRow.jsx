

const TableRow = ({ song, songLink, artist, artistLink, album }) => {

  return (
    <tbody>
      <tr >
        <th scope="row"></th>
        <td><a target="_blank" href={songLink}>{song}</a></td>
        <td><a target="_blank" href={artistLink}>{artist}</a></td>
        <td>{album}</td>
      </tr>
    </tbody>
  );
}

export default TableRow;