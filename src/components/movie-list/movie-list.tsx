import React from 'react';
import classes from './movie-list.module.scss';
import MovieListItem from './movie-list-item/movie-list-item';
import { MoviePreview } from '../../models/movie-preview.model';

function MovieList({ movies }: { movies: MoviePreview[] }) {
  return (
    <div className={classes['movie-list']}>
      {movies.map(({ genres, title, releaseDate, voteAverage, voteCount, posterPath, id }) => (
        <MovieListItem
          id={id}
          key={id}
          genres={genres ?? []}
          title={title}
          releaseDate={releaseDate?.split('-')[0]}
          voteAverage={voteAverage ?? 0}
          voteCount={voteCount ?? 0}
          posterPath={posterPath}
        />
      ))}
    </div>
  );
}

export default MovieList;
