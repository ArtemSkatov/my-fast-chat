import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoSlice from '@/features/todo/model/todoSlice';
import localStorage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: "user",
  storage: localStorage,
};

const persistedToDoReducer = persistReducer(persistConfig, todoSlice);

const rootReducer = combineReducers({
  todo: persistedToDoReducer,
});


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;