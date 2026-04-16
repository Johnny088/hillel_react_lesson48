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
    addHabit: (state, action: PayloadAction<Habit>) => {
      state.habits.push(action.payload);
    },
    removeHabit: (state, action: PayloadAction<number>) => {
      state.habits = state.habits.filter(habit => habit.id != action.payload);
    },
    changeBoxState: (state, action: PayloadAction<number>) => {
      state.habits = state.habits.map(habit =>
        habit.id === action.payload
          ? { ...habit, isChecked: !habit.isChecked }
          : habit,
      );
    },
  },
});

export const { addHabit, removeHabit, changeBoxState } = habitsSlice.actions;

export default habitsSlice.reducer;
