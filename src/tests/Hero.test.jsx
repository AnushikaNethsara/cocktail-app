import React from 'react';
import { render } from '@testing-library/react';
import Hero from '../components/atoms/Hero';

describe('Hero Component', () => {
  test('renders without crashing', () => {
    const { container } = render(<Hero />);
    
    expect(container).toBeTruthy(); 
  });
});
