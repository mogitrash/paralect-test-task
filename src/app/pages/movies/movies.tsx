import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './movies.module.scss';
import MovieList from '../../../components/movie-list/movie-list';
import MovieListFilters from './components/movie-list-filters/movie-list-filters';
import { fetchMovies } from '../../../store/movies/movies.slice';

import { fetchGenres } from '../../../store/genres/genres.slice';
import { selectGenresMap, selectIsGenresLoading } from '../../../store/genres/genres.selectors';
import { selectIsMoviesLoading, selectMoviesPreview } from '../../../store/movies/movies.selectors';
import { generateYearsArray } from '../../../common/generate-years-array';
import { FilterFormValue } from '../../../models/filter-form-value.model';

function Movies() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies({ language: 'en-US', page: 1 }) as any);
    dispatch(fetchGenres({ language: 'en' }) as any);
  }, [dispatch]);

  const handleFiltersChange = ({ year, genres, from, to, sort }: FilterFormValue) => {
    dispatch(
      fetchMovies({
        language: 'en-US',
        primary_release_year: year ? +year : undefined,
        with_genres: genres.join('|'),
        'vote_average.gte': from ? +from : undefined,
        'vote_average.lte': to ? +to : undefined,
        sort_by: sort || undefined,
      }) as any,
    );
  };

  const isGenresLoading = useSelector(selectIsGenresLoading);
  const isMoviesLoading = useSelector(selectIsMoviesLoading);
  const moviesPreview = useSelector(selectMoviesPreview);
  const genresMap = useSelector(selectGenresMap);

  if (isGenresLoading || isMoviesLoading) {
    return (
      <main className={classes.movies}>
        <h2 className={classes.title}>Movies</h2>
        <MovieListFilters
          handleFiltersChange={handleFiltersChange}
          years={generateYearsArray(1879, 2024)}
          genres={Object.entries(genresMap).map((genre) => ({
            value: genre[0],
            label: genre[1],
          }))}
        />
        <div>Loading...</div>
      </main>
    );
  }

  return (
    <main className={classes.movies}>
      <h2 className={classes.title}>Movies</h2>
      <MovieListFilters
        handleFiltersChange={handleFiltersChange}
        years={generateYearsArray(1879, 2024)}
        genres={Object.entries(genresMap).map((genre) => ({
          value: genre[0],
          label: genre[1],
        }))}
      />
      <MovieList movies={moviesPreview} />
    </main>
  );
}

export default Movies;
