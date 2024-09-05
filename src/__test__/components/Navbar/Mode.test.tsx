import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Mode from '../../../components/Navbar/Mode';
import modeReducer from '../../../redux/Mode';
const store = configureStore({
  reducer: {
    mode: modeReducer,
  },
});
test('renders Mode component and toggles theme on click', () => {
  render(
    <Provider store={store}>
      <Mode />
    </Provider>
  );
  const modeButton = screen.getByTestId('mode-button');
  expect(modeButton).toBeInTheDocument();
  const sunIcon = screen.queryByTestId('sun-icon');
  const moonIcon = screen.queryByTestId('moon-icon');
  if (sunIcon) {
    expect(sunIcon).toBeInTheDocument();
  } else {
    expect(moonIcon).toBeInTheDocument();
  }
  fireEvent.click(modeButton);
  if (sunIcon) {
    expect(screen.queryByTestId('moon-icon')).toBeInTheDocument();
  } else {
    expect(screen.queryByTestId('sun-icon')).toBeInTheDocument();
  }
});
