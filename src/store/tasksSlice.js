import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks = [...state.tasks, ...action.payload];
    },
    deleteTask: (state, action) => {
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
