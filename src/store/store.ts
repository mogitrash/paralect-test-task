import { configureStore } from '@reduxjs/toolkit';
import genresSliceReducer from './genres/genres.slice';
import moviesSliceReducer from './movies/movies.slice';
import { StoreState } from './store.model';

export const store = configureStore<StoreState>({
  reducer: {
    genres: genresSliceReducer,
    movies: moviesSliceReducer,
  },
});
