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

export interface ProductionCompanyDTO {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}
