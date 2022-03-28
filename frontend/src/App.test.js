import { render, screen } from '@testing-library/react';
import App from './App';

test('login form', () => {
  render(<App />);
  const linkElement = screen.getByText(/Acceder/i);
  expect(linkElement).toBeInTheDocument();
});
