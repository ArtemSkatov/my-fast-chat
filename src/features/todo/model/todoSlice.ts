import { Task } from "@/entities/task/types/task";
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
      state.list = [...state.list, action.payload];
    },
    toggleIsDoneTask: (state, action: { payload: string; }) => {
      const copyTodoList = [...state.list];
      const currentIndex = copyTodoList.findIndex((item) => item.id === action.payload);

      copyTodoList[currentIndex].isDone = !copyTodoList[currentIndex].isDone;

      state.list = copyTodoList;
    },
    deleteTask: (state, action: { payload: string; }) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    }
  },
});

export const { addTask, deleteTask, toggleIsDoneTask } = todoSlice.actions;
export default todoSlice.reducer;
