import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './movies.module.scss';
import MovieList from '../../../components/movie-list/movie-list';
import MovieListFilters from './components/movie-list-filters/movie-list-filters';
import { fetchMovies } from '../../../store/movies/movies.slice';

import { fetchGenres } from '../../../store/genres/genres.slice';
import { selectIsGenresLoading } from '../../../store/genres/genres.selectors';
import { selectIsMoviesLoading, selectMoviesPreview } from '../../../store/movies/movies.selectors';

function Movies() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies({ language: 'en-US', page: 1 }) as any);
    dispatch(fetchGenres({ language: 'en' }) as any);
  }, [dispatch]);

  const isGenresLoading = useSelector(selectIsGenresLoading);
  const isMoviesLoading = useSelector(selectIsMoviesLoading);
  const moviesPreview = useSelector(selectMoviesPreview);

  if (isGenresLoading || isMoviesLoading) {
    return <div>Loading</div>;
  }

  return (
    <main className={classes.movies}>
      <h2 className={classes.title}>Movies</h2>
      <MovieListFilters />
      <MovieList movies={moviesPreview} />
    </main>
  );
}

export default Movies;
