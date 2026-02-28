import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
	id: string;
	text: string;
	completed: boolean;
	createdAt: number;
}

export type TodoFilter = "all" | "active" | "completed";

interface TodoState {
	items: Todo[];
	filter: TodoFilter;
}

const loadTodosFromStorage = (): Todo[] => {
	try {
		const saved = localStorage.getItem("todos");
		return saved ? JSON.parse(saved) : [];
	} catch (e) {
		console.error("Failed to load todos from localStorage", e);
		return [];
	}
};

const saveTodosToStorage = (todos: Todo[]) => {
	try {
		localStorage.setItem("todos", JSON.stringify(todos));
	} catch (e) {
		console.error("Failed to save todos to localStorage", e);
	}
};

const initialState: TodoState = {
	items: loadTodosFromStorage(),
	filter: "all",
};

const todoSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<string>) => {
			const newTodo: Todo = {
				id: crypto.randomUUID(),
				text: action.payload.trim(),
				completed: false,
				createdAt: Date.now(),
			};
			state.items.unshift(newTodo);
			saveTodosToStorage(state.items);
		},
		toggleTodo: (state, action: PayloadAction<string>) => {
			const todo = state.items.find((todo) => todo.id === action.payload);
			if (todo) {
				todo.completed = !todo.completed;
				saveTodosToStorage(state.items);
			}
		},
		deleteTodo: (state, action: PayloadAction<string>) => {
			state.items = state.items.filter((todo) => todo.id !== action.payload);
			saveTodosToStorage(state.items);
		},
		clearCompleted: (state) => {
			state.items = state.items.filter((todo) => !todo.completed);
			saveTodosToStorage(state.items);
		},
		setFilter: (state, action: PayloadAction<TodoFilter>) => {
			state.filter = action.payload;
		},
	},
});

export const { addTodo, toggleTodo, deleteTodo, clearCompleted, setFilter } =
	todoSlice.actions;
export default todoSlice.reducer;
