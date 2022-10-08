import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';
import selectedReducer from './selectedSlice';
import taskTypeReducer from './taskTypeSlice';
import addItemReducer from './addItemSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    selected: selectedReducer,
    taskTypes: taskTypeReducer,
    addItem: addItemReducer,
  },
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
