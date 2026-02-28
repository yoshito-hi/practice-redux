import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoState {
  items: Todo[];
}

const initialState: TodoState = {
  items: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.items.push({
        id: crypto.randomUUID(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.items.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
    },
    clearCompleted: (state) => {
      state.items = state.items.filter((todo) => !todo.completed);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, clearCompleted } = todoSlice.actions;
export default todoSlice.reducer;
