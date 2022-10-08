import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Task {
  id: string;
  title: string;
  type: string;
  color: string;
  author: string;
  description: string;
  subtasks: Subtask;
}

export interface Subtask {
  id: string;
  title: string;
  type: string;
  color: string;
}

interface SelectedTaskInterface {
  selectedTask: null | Task;
  selectedSubtask: null | Subtask;
}

const initialState: SelectedTaskInterface = {
  selectedTask: null,
  selectedSubtask: null,
};

export const selectedSlice = createSlice({
  name: 'selected',
  initialState,
  reducers: {
    updateSelectedTask: (state, action: PayloadAction<Task>) => {
      state.selectedTask = action.payload;
      console.log(action.payload);
    },
    updateSelectedSubtask: (state, action: PayloadAction<Subtask>) => {
      state.selectedSubtask = action.payload;
    },
  },
});

export const { updateSelectedTask, updateSelectedSubtask } =
  selectedSlice.actions;

export default selectedSlice.reducer;
