import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  taskTypes: [],
};

export const taskTypeSlice = createSlice({
  name: 'taskTypes',
  initialState,
  reducers: {
    updateTaskTypes: (state, action: PayloadAction<[]>) => {
      state.taskTypes = [...state.taskTypes, ...action.payload];
    },
  },
});

export const { updateTaskTypes } = taskTypeSlice.actions;

export default taskTypeSlice.reducer;
