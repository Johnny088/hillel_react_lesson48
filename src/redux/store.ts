import { configureStore } from '@reduxjs/toolkit';
import habitsReducer from './habits/habitsSlice';
export const store = configureStore({
  reducer: {
    habits: habitsReducer,
  },
});
