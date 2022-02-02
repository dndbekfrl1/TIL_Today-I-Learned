import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../feature/counter/counterSlice';
/**
 * configureStore:
 * create store
 *
 */

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
