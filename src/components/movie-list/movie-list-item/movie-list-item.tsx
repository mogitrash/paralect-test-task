import React, { memo } from 'react';
import { Button } from '@mantine/core';
import classes from './movie-list-item.module.scss';
import { MoviePreview } from '../../../models/movie-preview.model';
import { ReactComponent as Star } from '../../../assets/star.svg';
import { voteCountBuilder } from '../../../common/vote-count-builder';

function MovieListItem({
  title,
  releaseDate,
  voteAverage,
  voteCount,
  posterPath,
  genres,
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
            <div className={classes.average}>{voteAverage.toFixed(1)}</div>
            <div className={classes.count}>{`(${voteCountBuilder(voteCount)})`}</div>
          </div>
        </div>
        <div className={classes.genres}>
          <span>Genres</span>
          <div>{` ${genres
            .slice(0, 2)
            .map((genre) => genre.name)
            .join(', ')}`}</div>
        </div>
      </div>
      <Button variant="transparent" className={classes.favourite}>
        <Star className={classes.star} />
      </Button>
    </div>
  );
}

export default memo(MovieListItem);
