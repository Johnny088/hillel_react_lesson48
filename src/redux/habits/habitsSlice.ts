import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Habit } from '../../types';

interface Habitstate {
  habits: Habit[];
}
const initialState: Habitstate = {
  habits: [],
};
const habitsSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    addHabit: (state, action: PayloadAction<Habit>) => {
      state.habits.push(action.payload);
    },
    removeHabit: ({ habits }, action: PayloadAction<number>) => {
      habits = habits.filter(habit => habit.id != action.payload);
    },
  },
});

export const { addHabit, removeHabit } = habitsSlice.actions;

export default habitsSlice.reducer;
