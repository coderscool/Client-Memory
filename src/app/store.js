import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import postsReducer from '../features/Reducers/postsSlice'
import modalReducer from '../features/Reducers/modalSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    modal: modalReducer,
  },
});
