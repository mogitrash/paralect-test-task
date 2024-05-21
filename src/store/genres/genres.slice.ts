import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import { RequestStatus } from '../../common/request-status.model';
import { getAllGenres } from '../../api/genres';

type GenresObjectMap = {
  [key: number]: string;
};

export interface GenresState {
  genresMap: GenresObjectMap;
  requestStatus: RequestStatus;
}

const initialState: GenresState = {
  genresMap: {},
  requestStatus: 'IDLE',
};

export const fetchGenres = createAsyncThunk('genres/fetchGenres', async () => getAllGenres());

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

const selectGenresState = (state: any) => state.genres as GenresState;
export const selectIsLoading = createSelector(
  selectGenresState,
  (state: GenresState) => state.requestStatus === 'PENDING' || state.requestStatus === 'IDLE',
);

export default genresSlice.reducer;
