import { useSelector } from 'react-redux';
import { AddNewHabitForm } from '../../components/AddNewHabitForm/AddNewHabitForm';
import { HabitItem } from '../../components/HabitItem/HabitItem';
import { HabitsEmptyState } from '../../components/HabitsEmptyState/HabitsEmptyState';
import css from './habitsPage.module.css';
import { selectHabits } from '../../redux/habits/habitsSelector';
export const HabitsPage = () => {
  const habits = useSelector(selectHabits);
  return (
    <div className={css.container}>
      <h1>Todays tasks</h1>
      {habits.length === 0 ? (
        <HabitsEmptyState />
      ) : (
        <ul>
          {habits.map(habit => (
            <li key={habit.id}>
              <HabitItem item={habit} />
            </li>
          ))}
        </ul>
      )}
      <AddNewHabitForm />
    </div>
  );
};
