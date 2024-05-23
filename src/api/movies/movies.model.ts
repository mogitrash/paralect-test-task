export interface MovieDTO {
  adult: boolean;
  budget: number;
  genre_ids: number[];
  id: number;
  imdb_id: string;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieDetailsDTO extends MovieDTO {
  production_companies: ProductionCompanyDTO[];
}

export interface GetAllMoviesRequestDTO {
  page?: number;
  primary_release_year?: number;
  with_genres?: string; // NOTE: can be a comma (AND) or pipe (OR) separated query
  language?: string;
  'vote_average.gte'?: number;
  'vote_average.lte'?: number;
  sort_by?: string;
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
