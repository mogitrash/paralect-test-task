import { MovieDTO } from '../../api/movies';
import { Movie } from './movies.model';

export const movieDTOConverter = (movieDTO: MovieDTO): Movie => ({
  adult: movieDTO.adult,
  backdropPath: movieDTO.backdrop_path,
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
