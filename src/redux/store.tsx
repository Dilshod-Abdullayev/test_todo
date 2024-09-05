import { configureStore } from '@reduxjs/toolkit';
import modeReducer from './Mode';
import todosReducer from './Todos';

const store = configureStore({
  reducer: {
    mode: modeReducer,
    todos: todosReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;