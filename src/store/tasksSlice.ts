import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TaskListSliceInterface } from '../components/Interfaces/SliceInterfaces';

const initialState: TaskListSliceInterface = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<[]>) => {
      state.tasks = [...state.tasks, ...action.payload];
    },
    // CHANGE ANY!!!
    deleteTask: (state, action: any) => {
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
