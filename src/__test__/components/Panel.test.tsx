import { render, screen, fireEvent } from '@testing-library/react';
import Panel from '../../components/Panel';
import { Provider } from 'react-redux';
import store from '../../redux/store';
jest.mock("../../hooks/setModal", () => ({
    __esModule: true,
    default: () => ({
        openModal: jest.fn(),
        closeModal: jest.fn(),
    }),
}));

test('renders Panel component', () => {
    render(
        <Provider store={store}>
            <Panel />
        </Provider>
    );
    expect(screen.getByText("Tasks")).toBeInTheDocument();
    expect(screen.getByText("Add")).toBeInTheDocument();
    expect(screen.getByText("Task")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Add"));
    console.log(screen.debug());
    expect(screen.getByPlaceholderText("Enter todo")).toBeInTheDocument();
    expect(screen.getByTestId("add-todo-button")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Tasks"));
    expect(screen.getByText("Tasks")).toBeInTheDocument();
    expect(screen.getByText("Add")).toBeInTheDocument();
    expect(screen.getByText("Task")).toBeInTheDocument();
});
