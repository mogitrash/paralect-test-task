import React from 'react';
import classes from './movies.module.scss';
import Filters from '../../components/filters/filters';

function Movies() {
  return (
    <main className={classes.movies}>
      <h2 className={classes.title}>Movies</h2>

      <Filters />
    </main>
  );
}

export default Movies;
