import { Task } from "@/entities/todo/types/task";
import { createSlice } from "@reduxjs/toolkit";

type TodoState = {
  list: Task[];
};

const initialState: TodoState = {
  list: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action: { payload: Task; }) => {
      state.list.push(action.payload);
    },
    deleteTask: (state, action: { payload: string; }) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    }
  },
});

export const { addTask, deleteTask } = todoSlice.actions;
export default todoSlice.reducer;
