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
    } catch (error) {
      alert('Please wait a few minutes before try again');
    } finally {
      setIsLoading(false);
    }
  };
  return [searchLyrics, { isLoading, lyricsData }];
};

export default useLyricsSearch;
