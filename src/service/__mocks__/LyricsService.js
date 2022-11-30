export const mockGetLyrics = jest.fn().mockRejectedValue();

export class LyricsService {
  // eslint-disable-next-line class-methods-use-this
  getLyrics = mockGetLyrics;
}

export const lyricsService = new LyricsService();
