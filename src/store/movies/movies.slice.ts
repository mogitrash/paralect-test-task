import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GetAllMoviesRequestDTO, getAllMovies, getMovieById } from '../../api/movies';
import { MoviesState } from './movies.model';
import { movieDTOConverter, movieDetailsDTOConverter } from './movies.converter';

const initialState: MoviesState = {
  movies: [],
  requestStatus: 'IDLE',
  currentMovie: null,
};

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (params: GetAllMoviesRequestDTO) => getAllMovies(params),
);
export const fetchMovie = createAsyncThunk('movies/fetchMovie', async (id: number) =>
  getMovieById(id),
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
    builder.addCase(fetchMovie.fulfilled, (state, action) => {
      state.requestStatus = 'FULFILLED';

      state.currentMovie = movieDetailsDTOConverter(action.payload);
    });
    builder.addCase(fetchMovies.rejected, (state) => {
      state.requestStatus = 'REJECTED';
    });
  },
});

export default moviesSlice.reducer;
