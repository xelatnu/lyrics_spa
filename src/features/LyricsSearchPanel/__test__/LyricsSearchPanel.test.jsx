import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import LyricsSearchPanel from '../LyricsSearchPanel';
import * as mockLyricsService from '../../../service/LyricsService';

jest.mock('../../../service/LyricsService');

describe('<LyricsSearchPanel/>', () => {
  const mockSearchLyrics = jest.fn();

  const handleSubmit = jest.fn(() => mockSearchLyrics());

  it('should handle submit with correct value of request', async () => {
    mockLyricsService.mockGetLyrics.mockResolvedValue();
    const { getByTestId } = render(<LyricsSearchPanel onSearch={handleSubmit} />);
    const input = getByTestId('search-input');
    const btn = getByTestId('submit-button');
    fireEvent.change(input, { target: { value: 'Good Luck' } });
    fireEvent.click(btn);
    expect(handleSubmit).toHaveBeenCalledWith('Good Luck');
    await waitFor(async () => {
      expect(mockLyricsService.mockGetLyrics).toHaveBeenCalled();
    });
  });
});
