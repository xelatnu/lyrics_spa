import { BASE_URL, UID, TOKEN_ID } from './LyricsServiceProps';

class LyricsService {
  constructor(baseUrl, tokenid, uid) {
    this.baseUrl = baseUrl;
    this.uid = uid;
    this.tokenid = tokenid;
  }

  async getLyrics(lyricsValue, artist = '') {
    const res = await fetch(this.baseUrl + new URLSearchParams({
      uid: this.uid,
      tokenid: this.tokenid,
      term: lyricsValue,
      artist: artist,
      format: 'json',
    }));

    const { result } = await res.json();
    return result;
  }
}

const lyricsService = new LyricsService(BASE_URL, TOKEN_ID, UID);

export default lyricsService;
