import React from 'react';
import classes from './movie-list-item.module.scss';
import { MoviePreview } from '../../../models/movie-preview.model';
import { ReactComponent as Star } from '../../../assets/star.svg';

function MovieListItem({
  title,
  releaseDate,
  voteAverage,
  voteCount,
  posterPath,
  // genres,
}: MoviePreview) {
  return (
    <div className={classes['movie-list-item']}>
      <img className={classes['movie-poster']} src={posterPath} alt={`${title} poster`} />
      <div className={classes.info}>
        <div className={classes.name}>
          <div className={classes.title}>{title}</div>
          <div className={classes.year}>{releaseDate}</div>
          <div className={classes.votes}>
            <Star stroke="#FAB005" fill="#FAB005" />
            <div className={classes.average}>{voteAverage}</div>
            <div className={classes.count}>{voteCount}</div>
          </div>
        </div>
        <div className={classes.genres}>
          <span>Genres</span>
          {/* <div>{` ${genres.map((genre) => genre.name).join(', ')}`}</div> */}
        </div>
      </div>
      <Star className={classes.favourite} />
    </div>
  );
}

export default MovieListItem;
