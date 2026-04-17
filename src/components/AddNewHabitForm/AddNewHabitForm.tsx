import { useDispatch } from 'react-redux';

import { addHabit } from '../../redux/habits/habitsSlice';
import type { AppDispatch } from '../../redux/store';

export const AddNewHabitForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const submitHandler = (formData: FormData) => {
    const title = formData.get('habit') as string;
    if (title.trim() === '') {
      return;
    }
    dispatch(addHabit(title.trim()));
  };
  return (
    <form action={submitHandler}>
      <input name="habit" type="text" />
      <button>add</button>
    </form>
  );
};
