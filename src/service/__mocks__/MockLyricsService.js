const mockGetLyrics = jest.fn().mockRejectedValue();

class MockLyricsService {
  async mockGetLyrics() {
    return mockGetLyrics;
  }
}

const lyricsService = new MockLyricsService();

export default lyricsService;
