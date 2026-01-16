import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the home hero headline', () => {
  render(<App />);
  expect(screen.getByText(/je construis des produits/i)).toBeInTheDocument();
});
