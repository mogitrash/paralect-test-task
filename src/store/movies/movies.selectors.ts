import { createSelector } from '@reduxjs/toolkit';
import { imagePathBuilder } from '../../common/image-path-builder';
import { GenresObjectMap } from '../genres/genres.model';
import { StoreState } from '../store.model';
import { MoviesState } from './movies.model';
import { MoviePreview } from '../../models/movie-preview.model';
import { selectGenresMap } from '../genres/genres.selectors';

const selectMoviesState = (state: StoreState) => state.movies;
export const selectMoviesPreview = createSelector(
  selectMoviesState,
  selectGenresMap,
  (state: MoviesState, genresMap: GenresObjectMap): MoviePreview[] =>
    state.movies.map(
      (movie): MoviePreview => ({
        ...movie,
        genres: movie.genresIds.map((genreId) => ({
          id: genreId,
          name: genresMap?.[genreId] || '',
        })),
        posterPath: imagePathBuilder(movie.posterPath, 154),
      }),
    ),
);
export const selectIsMoviesLoading = createSelector(
  selectMoviesState,
  (state: MoviesState) => state.requestStatus === 'PENDING' || state.requestStatus === 'IDLE',
);
