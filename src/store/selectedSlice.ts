import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  TaskSliceInterface,
  SubtaskSliceInterface,
  SelectedTaskSliceInterface,
} from '../components/Interfaces/SliceInterfaces';

const initialState: SelectedTaskSliceInterface = {
  selectedTask: null,
  selectedSubtask: null,
};

export const selectedSlice = createSlice({
  name: 'selected',
  initialState,
  reducers: {
    updateSelectedTask: (
      state,
      action: PayloadAction<TaskSliceInterface | null>
    ) => {
      state.selectedTask = action.payload;
    },
    updateSelectedSubtask: (
      state,
      action: PayloadAction<SubtaskSliceInterface | null>
    ) => {
      state.selectedSubtask = action.payload;
    },
  },
});

export const { updateSelectedTask, updateSelectedSubtask } =
  selectedSlice.actions;

export default selectedSlice.reducer;
