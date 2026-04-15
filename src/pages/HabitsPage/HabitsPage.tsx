import { AddNewHabitForm } from '../../components/AddNewHabitForm/AddNewHabitForm';
// import { HabitItem } from '../../components/HabitItem/HabitItem';
// import { HabitsEmptyState } from '../../components/HabitsEmptyState/HabitsEmptyState';
import css from './habitsPage.module.css';
export const HabitsPage = () => {
  return (
    <div className={css.container}>
      {/* <h1>Todays tasks</h1>
      {habits.length === 0 ? (
        <HabitsEmptyState />
      ) : (
        <ul>
          {habits.map(habit => (
            <li>
              <HabitItem key={habit.id} item={habit} />
            </li>
          ))}
        </ul>
      )} */}
      <AddNewHabitForm />
    </div>
  );
};
