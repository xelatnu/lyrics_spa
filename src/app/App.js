import { useState } from 'react';
import LyricsHeader from '../components/LyricsHeader';
import LyricsTable from '../components/LyricsTable';
import LoadingSpinner from '../components/loadingSpinner/loadingSpinner';
import './App.css';

function App() {
  const [lyricsData, setLyricsData] = useState([]);
  // const [loading, setLoading] = useState('false');

  return (
    <div className="App">
      <LyricsHeader setLyricsData={setLyricsData} />
      <LyricsTable lyricsData={lyricsData} />
    </div>
  );
}

export default App;
