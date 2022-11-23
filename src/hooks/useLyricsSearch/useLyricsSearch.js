import { useState } from 'react';
import { lyricsService } from '../../service/LyricsService';

const useLyricsSearch = () => {
  const [lyricsData, setLyricsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const searchLyrics = async ({ lyrics, artist }) => {
    try {
      setIsLoading(true);
      const res = await lyricsService.getLyrics(lyrics, artist);
      setLyricsData(res);
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return [searchLyrics, { isLoading, lyricsData, error }];
};

export default useLyricsSearch;
