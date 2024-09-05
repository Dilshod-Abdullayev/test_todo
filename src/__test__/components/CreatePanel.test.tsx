import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import CreatePanel from "../../components/CreatePanel";
import todosReducer, { addTodo } from "../../redux/Todos";
const store = configureStore({
    reducer: {
        todos: todosReducer
    },
    preloadedState: {
        todos: {
            todos: []
        }
    }
});
test("renders CreatePanel component", () => {
    render(
        <Provider store={store}>
            <CreatePanel />
        </Provider>
    );
    expect(screen.getByPlaceholderText("Enter todo")).toBeInTheDocument();
    expect(screen.getByText("Add")).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();
});
test("adds todo via CreatePanel", () => {
    const dispatch = jest.spyOn(store, 'dispatch');
    render(
        <Provider store={store}>
            <CreatePanel />
        </Provider>
    );
    const input = screen.getByPlaceholderText("Enter todo") as HTMLInputElement;
    const addButton = screen.getByTestId("add-todo-button") as HTMLButtonElement;
    fireEvent.change(input, { target: { value: "Test Todo" } });
    fireEvent.click(addButton);
    expect(dispatch).toHaveBeenCalledWith(addTodo("Test Todo"));
});