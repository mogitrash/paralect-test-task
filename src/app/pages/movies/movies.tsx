import React from 'react';
import classes from './movies.module.scss';
import Filters from '../../components/filters/filters';
import Sort from '../../components/sort/sort';
import MovieList from '../../components/movie-list/movie-list';

function Movies() {
  return (
    <main className={classes.movies}>
      <h2 className={classes.title}>Movies</h2>
      <Filters />
      <Sort />
      <MovieList />
    </main>
  );
}

export default Movies;
