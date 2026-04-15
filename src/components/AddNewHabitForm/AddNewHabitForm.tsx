import { useDispatch } from 'react-redux';
import type { Habit } from '../../types';
import { addHabit } from '../../redux/habits/habitsSlice';
import type { AppDispatch } from '../../redux/store';

export const AddNewHabitForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const submitHandler = (formData: FormData) => {
    const title = formData.get('habit') as string;
    if (title.trim() === '') {
      return;
    }
    const newHabit: Habit = {
      title,
      isChecked: false,
      id: Date.now(),
    };
    dispatch(addHabit(newHabit));
  };
  return (
    <form action={submitHandler}>
      <input name="habit" type="text" />
      <button>add</button>
    </form>
  );
};
