import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GetAllMoviesRequestDTO, getAllMovies } from '../../api/movies';
import { MoviesState } from './movies.model';
import { movieDTOConverter } from './movies.converter';

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

      state.movies = action.payload.results.map(movieDTOConverter);
    });
    builder.addCase(fetchMovies.rejected, (state) => {
      state.requestStatus = 'REJECTED';
    });
  },
});

export default moviesSlice.reducer;
