import { Genre } from './genre.model';

export interface MoviePreview {
  title: string;
  releaseDate: string;
  voteAverage: number;
  voteCount: number;
  posterPath: string;
  genres: Genre[];
}
