import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  //rendu du composant dans le test bed(container)
  const linkElement = screen.getByText(/learn react/i);
  //recup de l'element qui contient la regex learn react
  expect(linkElement).toBeInTheDocument();
  //on teste que l'element esdt dans le DOM
});
