import { useDispatch } from 'react-redux';
import type { Habit } from '../../types';
import css from './HabitItem.module.css';
import { toggleHabit, removeHabit } from '../../redux/habits/habitsSlice';
interface Props {
  item: Habit;
}
export const HabitItem = ({ item }: Props) => {
  const dispatch = useDispatch();
  const onChangeStatus = (): void => {
    dispatch(toggleHabit(item.id));
  };

  const removeHabitHandler = () => {
    dispatch(removeHabit(item.id));
  };
  return (
    <>
      <label>
        {item.title}
        <input
          type="checkbox"
          checked={item.isChecked}
          onChange={onChangeStatus}
        />
      </label>
      <button className={css.deleteBtn} onClick={removeHabitHandler}>
        delete
      </button>
    </>
  );
};
