export interface MovieDTO {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genres_ids: number[];
  id: number;
  imdb_id: string;
  poster_path: string;
  production_companies: ProductionCompanyDTO[];
  release_date: string;
  revenue: number;
  runtime: number;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface GetAllMoviesRequestDTO {
  page?: number;
  primaryReleaseYear?: number;
  voteAverage?: number;
  withGenres?: string; // NOTE: can be a comma (AND) or pipe (OR) separated query
  language?: string;
}

export interface GetAllMoviesResponseDTO {
  page: number;
  results: MovieDTO[];
  total_page: number;
  total_results: number;
}

export interface ProductionCompanyDTO {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}
