import React from 'react';
import classes from './movie-list.module.scss';
import MovieListItem from './movie-list-item/movie-list-item';

function MovieList() {
  return (
    <div className={classes['movie-list']}>
      <MovieListItem
        title="Title"
        releaseDate="2000"
        voteAverage={9.5}
        voteCount={999}
        posterPath=""
        genres={[
          {
            id: 0,
            name: 'Drama',
          },
          {
            id: 1,
            name: 'Comedy',
          },
        ]}
      />
      <MovieListItem
        title="Title"
        releaseDate="2000"
        voteAverage={9.5}
        voteCount={999}
        posterPath=""
        genres={[
          {
            id: 0,
            name: 'Drama',
          },
          {
            id: 1,
            name: 'Comedy',
          },
        ]}
      />
    </div>
  );
}

export default MovieList;
