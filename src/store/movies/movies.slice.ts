import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import { GetAllMoviesRequestDTO, getAllMovies } from '../../api/movies';
import { StoreState } from '../store.model';
import { MoviesState } from './movies.model';

const initialState: MoviesState = {
  movies: [],
  requestStatus: 'IDLE',
};

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (params: GetAllMoviesRequestDTO) => getAllMovies(params),
);

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.requestStatus = 'PENDING';
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.requestStatus = 'FULFILLED';

      state.movies = action.payload.results;
    });
    builder.addCase(fetchMovies.rejected, (state) => {
      state.requestStatus = 'REJECTED';
    });
  },
});

const selectMoviesState = (state: StoreState) => state.movies;
export const selectIsLoading = createSelector(
  selectMoviesState,
  (state: MoviesState) => state.requestStatus === 'PENDING' || state.requestStatus === 'IDLE',
);

export default moviesSlice.reducer;
