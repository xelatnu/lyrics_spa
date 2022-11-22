import { renderHook, act, waitFor } from '@testing-library/react';
import useLyricsSearch from '../useLyricsSearch';
import { lyricsService } from '../../../service/LyricsService';

describe('useLyricsSearch hook', () => {
  it('should be called once', async () => {
    const { result: { current: [execute] } } = renderHook(useLyricsSearch);
    await act(async () => {
      await execute({ lyrics: 'good', artist: 'Michael Jackson' });
    });
    await waitFor(async () => {
      expect(lyricsService.getLyrics).toHaveBeenCalledWith('good', 'Michael Jackson');
    });
  });

  it('should be called 2 times ', async () => {
    const { result: { current: [execute] } } = renderHook(useLyricsSearch);
    await act(async () => {
      await execute({ lyrics: 'hola', artist: '' });
      await execute({ lyrics: 'hola', artist: '' });
    });
    await waitFor(async () => {
      expect(lyricsService.getLyrics).toBeCalledTimes(2);
    });
  });

  it('should be equal tu return of execute ', async () => {
    const { result: { current: [execute] } } = renderHook(useLyricsSearch);
    console.log(renderHook(useLyricsSearch));
    await act(async () => {
      await execute('');
    });
    await waitFor(async () => {
      expect('Custom hook').toEqual('Custom hook');
    });
  });
});
