import { configureStore } from '@reduxjs/toolkit';
import habitsReducer, { type Habitstate } from './habits/habitsSlice';
import {
  persistStore,
  persistReducer,
  type PersistConfig,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig: PersistConfig<Habitstate> = {
  key: 'habits',
  storage,
};
const persistedHabitReducer = persistReducer(persistConfig, habitsReducer);

export const store = configureStore({
  reducer: {
    habits: persistedHabitReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);
