import { createSlice } from "@reduxjs/toolkit";

interface ITodo {
  id: string;
  text: string;
}

const initialState: ITodo[] = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now().toString(), text: action.payload });
    },
    deleteTodo: (state, action) => {
      state = state.filter((todo) => todo.id !== action.payload);
    },
  },
})

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;