import { configureStore } from '@reduxjs/toolkit';
import habitsReducer, { type Habitstate } from './habits/habitsSlice';
import {
  persistStore,
  persistReducer,
  type PersistConfig,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/es/storage';

const persistConfig: PersistConfig<Habitstate> = {
  key: 'habits',
  storage,
  whitelist: ['habits'],
};
const persistedHabitReducer = persistReducer(persistConfig, habitsReducer);

export const store = configureStore({
  reducer: {
    habits: persistedHabitReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);
