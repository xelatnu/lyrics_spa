import React from 'react';
import { screen, waitFor, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from '../App';
import data from '../../__fixtures__/lyrics';
import renderWithProviders from '../../utils/test-utils';
import '@testing-library/jest-dom';

describe('App screen render', () => {
  it('should render LyricsTable', async () => {
    fetch.mockResponseOnce(JSON.stringify(data));
    const { getByTestId } = renderWithProviders(
      <App />,
    );
    const input = getByTestId('lyrics-input');
    const btn = getByTestId('submit-button');
    act(() => {
      fireEvent.change(input, { target: { value: 'Good Luck' } });
      fireEvent.click(btn);
    });

    await waitFor(() => {
      expect(getByTestId('lyricsTable')).toBeInTheDocument();
    });
    screen.debug();
  });
});
