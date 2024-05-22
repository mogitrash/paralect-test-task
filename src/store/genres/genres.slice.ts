import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GetAllGenresRequestDTO, getAllGenres } from '../../api/genres';
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

export default genresSlice.reducer;
