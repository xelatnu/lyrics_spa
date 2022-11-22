import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LyricsSearchPanel from '../LyricsSearchPanel';
import * as mockLyricsService from '../../../service/LyricsService';

describe('<LyricsSearchPanel/>', () => {
  const mockOnSearch = jest.fn();

  it('should handle submit with correct input value', async () => {
    const { getByTestId } = render(<LyricsSearchPanel searchLyrics={mockOnSearch} />);
    const input = getByTestId('search-input');
    const btn = getByTestId('submit-button');
    fireEvent.change(input, { target: { value: 'Good Luck' } });
    fireEvent.click(btn);
    expect(mockOnSearch).toHaveBeenCalledWith({ artist: '', lyrics: 'Good Luck' });
  });
});
