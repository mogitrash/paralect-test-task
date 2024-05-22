import { createSelector } from '@reduxjs/toolkit';
import { StoreState } from '../store.model';
import { GenresState } from './genres.model';

const selectGenresState = (state: StoreState) => state.genres;
export const selectGenresMap = createSelector(
  selectGenresState,
  (state: GenresState) => state.genresMap,
);
export const selectIsGenresLoading = createSelector(
  selectGenresState,
  (state: GenresState) => state.requestStatus === 'PENDING' || state.requestStatus === 'IDLE',
);
