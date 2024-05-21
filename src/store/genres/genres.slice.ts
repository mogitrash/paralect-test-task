import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import { GetAllGenresRequestDTO, getAllGenres } from '../../api/genres';
import { StoreState } from '../store.model';
import { GenresObjectMap, GenresState } from './genres.model';

const initialState: GenresState = {
  genresMap: {},
  requestStatus: 'IDLE',
};

export const fetchGenres = createAsyncThunk(
  'genres/fetchGenres',
  async (params: GetAllGenresRequestDTO) => getAllGenres(params),
);

export const genresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGenres.pending, (state) => {
      state.requestStatus = 'PENDING';
    });
    builder.addCase(fetchGenres.fulfilled, (state, action) => {
      state.requestStatus = 'FULFILLED';
      const genresMap: GenresObjectMap = {};
      action.payload.forEach(({ id, name }) => {
        genresMap[id] = name;
      });

      state.genresMap = genresMap;
    });
    builder.addCase(fetchGenres.rejected, (state) => {
      state.requestStatus = 'REJECTED';
    });
  },
});

const selectGenresState = (state: StoreState) => state.genres;
export const selectIsLoading = createSelector(
  selectGenresState,
  (state: GenresState) => state.requestStatus === 'PENDING' || state.requestStatus === 'IDLE',
);

export default genresSlice.reducer;
