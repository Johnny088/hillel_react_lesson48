import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Habit } from '../../types';

export interface Habitstate {
  habits: Habit[];
}
const initialState: Habitstate = {
  habits: [],
};
const habitsSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    addHabit: (state, action: PayloadAction<string>) => {
      const newHabit: Habit = {
        title: action.payload,
        isChecked: false,
        id: Date.now(),
      };
      state.habits.push(newHabit);
    },

    removeHabit: (state, action: PayloadAction<number>) => {
      state.habits = state.habits.filter(habit => habit.id != action.payload);
    },

    toggleHabit: (state, action: PayloadAction<number>) => {
      state.habits = state.habits.map(habit =>
        habit.id === action.payload
          ? { ...habit, isChecked: !habit.isChecked }
          : habit,
      );
    },
  },
});

export const { addHabit, removeHabit, toggleHabit } = habitsSlice.actions;

export default habitsSlice.reducer;
