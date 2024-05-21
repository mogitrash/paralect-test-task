import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './movies.module.scss';
import Filters from '../../../components/filters/filters';
import Sort from '../../../components/sort/sort';
import MovieList from '../../../components/movie-list/movie-list';
import { fetchGenres, selectIsLoading } from '../../../store/genres/genres.slice';

function Movies() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres() as any);
  }, [dispatch]);

  const isLoading = useSelector(selectIsLoading);

  if (isLoading) {
    return <div>Loading</div>;
  }

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
