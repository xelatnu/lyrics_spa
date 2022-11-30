import React from 'react';
import renderWithProviders from '../../../utils/test-utils';
import LyricsTable from '../LyricsTable';

describe('Render <LyricsTable/>', () => {
  it('should render lyrics table header', () => {
    const { asFragment } = renderWithProviders(<LyricsTable />);
    expect(asFragment(<LyricsTable />)).toMatchSnapshot();
  });
});
