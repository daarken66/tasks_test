import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  TaskListSliceInterface,
  TaskSliceInterface,
} from '../components/Interfaces/SliceInterfaces';

const initialState: TaskListSliceInterface = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskSliceInterface[]>) => {
      state.tasks = [...state.tasks, ...action.payload];
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks.filter((task) => task.id !== action.payload);
    },
    // addSubtask: (state, action) => {
    //   console.log('adding subtask');
    // },
    // deleteSubtask: (state, action) => {
    //   console.log('deleting subtask');
    // },
  },
});

export const { addTask, deleteTask } = tasksSlice.actions; // addSubTask, deleteSubtask //

export default tasksSlice.reducer;
