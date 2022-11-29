import React from 'react';
import { fireEvent } from '@testing-library/react';
import LyricsSearchPanel from '../LyricsSearchPanel';
import renderWithProviders from '../../../utils/test-utils';
// import * as mockLyricsService from '../../../service/LyricsService';

describe('<LyricsSearchPanel/>', () => {
  const mockOnSearch = jest.fn();

  it('should handle submit only with lyrics input value', async () => {
    const { getByTestId } = renderWithProviders(
      <LyricsSearchPanel onSearch={mockOnSearch} />,
    );
    const input = getByTestId('lyrics-input');
    const btn = getByTestId('submit-button');
    fireEvent.change(input, { target: { value: 'Good Luck' } });
    fireEvent.click(btn);
    expect(mockOnSearch).toHaveBeenCalledWith({ artist: '', lyrics: 'Good Luck' });
  });

  it('should handle submit only with artist input value', async () => {
    const { getByTestId } = renderWithProviders(
      <LyricsSearchPanel onSearch={mockOnSearch} />,
    );
    const input = getByTestId('artist-input');
    const btn = getByTestId('submit-button');
    fireEvent.change(input, { target: { value: 'Queen' } });
    fireEvent.click(btn);
    expect(mockOnSearch).toHaveBeenCalledTimes(0);
  });
});
