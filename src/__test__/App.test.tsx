import { render, screen } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import store from '../redux/store';
test('renders App component and Main component', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );
    const footerTextElement = screen.getByText(/About/i);
    expect(footerTextElement).toBeInTheDocument();
});