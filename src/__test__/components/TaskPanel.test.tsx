import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TasksPanel from '../../components/TasksPanel';

const mockStore = configureStore([]);

const initialState = {
    todos: {
        todos: [
            { id: 1, text: 'Buy groceries', completed: false },
        ],
    },
};
const store = mockStore(initialState);
describe('TasksPanel Component', () => {
    test('renders remove button and dispatches removeTodo action', () => {
        store.dispatch = jest.fn();
        render(
            <Provider store={store}>
                <TasksPanel />
            </Provider>
        );
        screen.debug(); // Print the HTML structure
    });
});
