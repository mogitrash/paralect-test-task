import React from 'react';
import classes from './movies.module.scss';
import MovieListFilters from '../../components/filters/movie-list-filters';
import MovieList from '../../components/movie-list/movie-list';

function Movies() {
  return (
    <main className={classes.movies}>
      <h2 className={classes.title}>Movies</h2>
      <MovieListFilters />
      <MovieList />
    </main>
  );
}

export default Movies;
