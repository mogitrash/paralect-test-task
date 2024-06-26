import { RequestStatus } from '../../common/request-status.model';

export interface MoviesState {
  movies: Movie[];
  requestStatus: RequestStatus;
}

export interface Movie {
  adult: boolean;
  backdropPath: string;
  budget: number;
  genresIds: number[];
  id: number;
  imdbId: string;
  posterPath: string;
  releaseDate: string;
  revenue: number;
  runtime: number;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
}

export interface ProductionCompany {
  id: number;
  logoPath: string;
  name: string;
  originCountry: string;
}
