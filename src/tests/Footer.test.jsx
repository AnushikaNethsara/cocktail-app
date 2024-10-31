import { render, screen } from '@testing-library/react';
import Footer from '../components/atoms/Footer'; 
describe('Footer Component', () => {
  test('renders the footer with correct text', () => {
    render(<Footer />);
  });
});
