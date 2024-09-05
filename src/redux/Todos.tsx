import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
interface Todo {
    id: number;
    text: string;
    completed: boolean;
}
interface TodoState {
    todos: Todo[];
}
const initialState: TodoState = {
    todos: [],
};
export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const newTodo: Todo = {
                id: state.todos.length + 1,
                text: action.payload,
                completed: false,
            };
            state.todos.push(newTodo);
        },
        toggleTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.map(todo =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            );
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
    },
});
export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export const selectTodos = (state: RootState) => state.todos.todos;
export default todoSlice.reducer;
