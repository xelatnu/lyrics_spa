import { useState } from 'react';
import lyricsService from '../service/LyricsService';

const useLyricsSearch = () => {
  const [lyricsData, setLyricsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const searchLyrics = async ({ lyrics, artist }) => {
    try {
      setIsLoading(true);
      const res = await lyricsService.getLyrics(lyrics, artist);
      if (res === undefined) {
        console.log('NO info');
        setError(true);
      } else {
        setLyricsData(res);
      }
    } catch (err) {
      alert('Sorry, some errors occurs. Try later.');
    } finally {
      setIsLoading(false);
    }
  };
  return [searchLyrics, { isLoading, lyricsData, error }];
};

export default useLyricsSearch;
