import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddItemStateSliceInterface } from '../components/Interfaces/SliceInterfaces';

const initialState: AddItemStateSliceInterface = {
  addingTask: false,
  addingSubtask: false,
};

export const addItemSlice = createSlice({
  name: 'addItem',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<boolean>) => {
      state.addingTask = action.payload;
    },
    addSubtask: (state, action: PayloadAction<boolean>) => {
      state.addingSubtask = action.payload;
    },
    closeAddItem: (state) => {
      state.addingTask = false;
      state.addingSubtask = false;
    },
  },
});

export const { addTask, addSubtask, closeAddItem } = addItemSlice.actions;

export default addItemSlice.reducer;
