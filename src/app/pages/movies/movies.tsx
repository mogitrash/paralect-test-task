import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './movies.module.scss';
import MovieList from '../../../components/movie-list/movie-list';
import MovieListFilters from './components/movie-list-filters/movie-list-filters';
import { fetchMovies, selectIsLoading } from '../../../store/movies/movies.slice';

function Movies() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies({ language: 'en-US' }) as any);
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
