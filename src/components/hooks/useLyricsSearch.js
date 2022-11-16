import { useState } from 'react';
import lyricsService from '../../features/lyricsService';

const useLyricsSearch = () => {
  const [lyricsData, setLyricsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchLyrics = async ({ lyrics, artist }) => {
    try {
      setIsLoading(true);
      const res = await lyricsService.getLyrics(lyrics, artist);
      setLyricsData(res);
    } catch (err) {
      alert('Sorry, some errors occurs. Try later.');
    } finally {
      setIsLoading(false);
    }
  };
  return [searchLyrics, { isLoading, lyricsData }];
};

export default useLyricsSearch;
