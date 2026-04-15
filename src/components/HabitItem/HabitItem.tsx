import type { Habit } from '../../types';
import css from './habitItem.module.css';
interface Props {
  item: Habit;
}
export const HabitItem = ({ item }: Props) => {
  const onChangeStatus = (): void => {
    console.log(' change status');
  };

  const removeHabitHandler = () => {
    console.log('remove handler');
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
