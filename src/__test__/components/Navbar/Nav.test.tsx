import { render, screen } from '@testing-library/react';
import Nav from '../../../components/Navbar/Nav';
jest.mock('../../../components/Navbar/Logo', () => () => <div>TODOlist</div>);
jest.mock('../../../components/Navbar/Mode', () => () => <div>Mode</div>);
test('renders Nav component', () => {
  render(<Nav />);
  const logoElement = screen.getByText(/TODOlist/i);
  expect(logoElement).toBeInTheDocument();
  const modeElement = screen.getByText(/Mode/i);
  expect(modeElement).toBeInTheDocument();
});
