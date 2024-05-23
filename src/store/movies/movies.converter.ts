import { MovieDTO, MovieDetailsDTO, ProductionCompanyDTO } from '../../api/movies';
import { Movie, MovieDetails, ProductionCompany } from './movies.model';

export const movieDTOConverter = (movieDTO: MovieDTO): Movie => ({
  adult: movieDTO.adult,
  budget: movieDTO.budget,
  genresIds: movieDTO.genre_ids,
  id: movieDTO.id,
  imdbId: movieDTO.imdb_id,
  posterPath: movieDTO.poster_path,
  releaseDate: movieDTO.release_date,
  revenue: movieDTO.revenue,
  runtime: movieDTO.runtime,
  title: movieDTO.title,
  video: movieDTO.video,
  voteAverage: movieDTO.vote_average,
  voteCount: movieDTO.vote_count,
});

export const productCompaniesDTOConverter = (
  productCompaniesDTO: ProductionCompanyDTO,
): ProductionCompany => ({
  id: productCompaniesDTO.id,
  logoPath: productCompaniesDTO.logo_path,
  name: productCompaniesDTO.name,
  originCountry: productCompaniesDTO.origin_country,
});

export const movieDetailsDTOConverter = (movieDetailsDTO: MovieDetailsDTO): MovieDetails => ({
  adult: movieDetailsDTO.adult,
  budget: movieDetailsDTO.budget,
  genresIds: movieDetailsDTO.genre_ids,
  id: movieDetailsDTO.id,
  imdbId: movieDetailsDTO.imdb_id,
  posterPath: movieDetailsDTO.poster_path,
  releaseDate: movieDetailsDTO.release_date,
  revenue: movieDetailsDTO.revenue,
  runtime: movieDetailsDTO.runtime,
  title: movieDetailsDTO.title,
  video: movieDetailsDTO.video,
  voteAverage: movieDetailsDTO.vote_average,
  voteCount: movieDetailsDTO.vote_count,
  productionCompanies: movieDetailsDTO.production_companies.map(productCompaniesDTOConverter),
});
