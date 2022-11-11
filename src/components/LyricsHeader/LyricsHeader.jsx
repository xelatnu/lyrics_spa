import SearchPanel from './components/LyricsSearchPanel/LyricsSearchPanel';

const LyricsHeader = ({ setLyricsData }) => {
  return (
    <header className="App-header">
      <h1>
        Search your favorit song lyrics
      </h1>
      <SearchPanel setLyricsData={setLyricsData} />
    </header>
  )
}

export default LyricsHeader;