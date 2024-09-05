import { render, screen } from '@testing-library/react';
import Logo from '../../../components/Navbar/Logo'
test('renders Logo component with TODOlist text', () => {
  render(<Logo />);
  const todoElement = screen.getByText(/TODO/i);
  const listElement = screen.getByText(/list/i);
  expect(todoElement).toBeInTheDocument();
  expect(listElement).toBeInTheDocument();
});
