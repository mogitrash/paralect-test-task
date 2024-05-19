import React from 'react';
import classes from './movies.module.scss';
import Filters from '../../components/filters/filters';
import Sort from '../../components/sort/sort';

function Movies() {
  return (
    <main className={classes.movies}>
      <h2 className={classes.title}>Movies</h2>
      <Filters />
      <Sort />
    </main>
  );
}

export default Movies;
