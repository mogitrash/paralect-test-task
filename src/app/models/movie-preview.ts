import Genre from './genre';

export default interface MoviePreview {
  title: string;
  releaseDate: string;
  voteAverage: number;
  voteCount: number;
  posterPath: string;
  genres: Genre[];
}
