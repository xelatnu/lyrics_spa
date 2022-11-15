import { useState } from 'react';
import lyricsService from '../../features/lyricsService';

const useSearhLyrics = () => {
  const [lyricsData, setLyricsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchLyrics = async ({ lyrics, artist = '' }) => {
    try {
      setIsLoading(true);
      const res = await lyricsService.getLyrics(lyrics, artist);
      setLyricsData(res);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      alert('Please wait a few minutes before try again');
    }
  };
  return [searchLyrics, { isLoading, lyricsData }];
};

export default useSearhLyrics;
