import { GenresState } from './genres/genres.model';
import { MoviesState } from './movies/movies.model';

export type StoreState = {
  genres: GenresState;
  movies: MoviesState;
};
