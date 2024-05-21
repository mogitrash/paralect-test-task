import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './movies.module.scss';
import MovieList from '../../../components/movie-list/movie-list';
import { fetchGenres, selectIsLoading } from '../../../store/genres/genres.slice';
import MovieListFilters from '../../../components/filters/movie-list-filters';

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
      <MovieListFilters />
      <MovieList />
    </main>
  );
}

export default Movies;
