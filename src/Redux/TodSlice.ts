import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the shape of your state
interface TodoState {
  todo: string[]; // Array of todos
}

// Initialize the state with an empty array for `todo`
const initialState: TodoState = {
  todo: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodo: (state, action: PayloadAction<string[]>) => {
      state.todo = action.payload;
    },
    addTodo: (state, action: PayloadAction<string>) => {
      if (!Array.isArray(state.todo)) {
        state.todo = []; // Ensure it's an array
      }
      state.todo.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todo.splice(action.payload, 1); // Remove todo by index
    },
    editTodo: (state, action: PayloadAction<{ index: number; newTodo: string }>) => {
      const { index, newTodo } = action.payload;
      if (index >= 0 && index < state.todo.length) {
        state.todo[index] = newTodo; // Update todo at the specified index
      }
    },
  },
});

export const { setTodo, addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
