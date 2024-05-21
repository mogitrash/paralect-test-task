import { configureStore } from '@reduxjs/toolkit';
import genresSliceReducer from './genres/genres.slice';
import moviesSliceReducer from './movies/movies.slice';

export const store = configureStore({
  reducer: {
    genres: genresSliceReducer,
    movies: moviesSliceReducer,
  },
});
