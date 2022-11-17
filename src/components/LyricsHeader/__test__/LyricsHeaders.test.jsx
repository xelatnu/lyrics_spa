/* eslint-disable react/jsx-filename-extension */
import { render } from '@testing-library/react';
import LyricsHeader from '../LyricsHeader';

it('should render title', () => {
  const { getByText } = render(<LyricsHeader title="My Header" />);
  const headingElement = getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

it('should render a title of h2 element', () => {
  const { getByRole } = render(<LyricsHeader />);
  const headingElement = getByRole('heading', { name: 'Header' });
  expect(headingElement).toHaveTextContent(/Search your favorite song lyrics/i);
});

it('should renders text node passed to h1 element by role', () => {
  const { getByRole } = render(<LyricsHeader title="My dog" />);
  const headingElement = getByRole('heading', { name: 'My dog' });
  expect(headingElement).toBeInTheDocument();
});

it('should renders text node passed to h1 element by role', () => {
  const { getByTitle } = render(<LyricsHeader />);
  const headingElement = getByTitle('Header');
  expect(headingElement).toBeInTheDocument();
});

it('should renders  h1 element by data-testid', () => {
  const { getByTestId } = render(<LyricsHeader />);
  const headingElement = getByTestId('header-1');
  expect(headingElement).toBeInTheDocument();
});
