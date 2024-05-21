import { configureStore } from '@reduxjs/toolkit';
import genresSliceReducer from './genres/genres.slice';

export const store = configureStore({
  reducer: {
    genres: genresSliceReducer,
  },
});
