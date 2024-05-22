import { Genre } from './genre.model';

export interface MoviePreview {
  id: number;
  title: string;
  releaseDate: string;
  voteAverage: number;
  voteCount: number;
  posterPath: string;
  genres: Genre[];
}
