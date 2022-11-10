import { lyricsService } from '../../features/lyricsService';
import TableHeader from './components/LyricsTableHeader';
import TableRow from './components/LyricsTableRow';



const LyricsTable = ({ lyricsData }) => {
  return (
    <table className="table table-hover">
      <TableHeader />
      {/* <TableRow song='test' artist='grisa' album='nou' link={'test'} />
      <TableRow song='test' artist='grisa' album='nou' link={'test'} />
      <TableRow song='test' artist='grisa' album='nou' link={'test'} />
      <TableRow song='test' artist='grisa' album='nou' link={'test'} />
      <TableRow song='test' artist='grisa' album='nou' link={'test'} /> */}

      {lyricsData.map(({ song, artist, album, ...restItem }) =>
        <TableRow
          song={song}
          songLink={restItem['song-link']}
          artist={artist}
          artistLink={restItem['artist-link']}
          album={album} />
      )}
    </table>
  )
}

export default LyricsTable;

