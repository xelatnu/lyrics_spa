/* eslint-disable react/jsx-filename-extension */
import { render } from '@testing-library/react';
import LyricsHeader from '../LyricsHeader';

describe('LyricsHeader', () => {
  it('should match a snapshot', () => {
    const { baseElement } = render(
      <LyricsHeader name="header">
        <p>Hello</p>
      </LyricsHeader>,
    );
    expect(baseElement).toMatchSnapshot();
  });
});
