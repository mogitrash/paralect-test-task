import React, { memo } from 'react';
import { Button } from '@mantine/core';
import classes from './movie.module.scss';
import { ReactComponent as Star } from '../../../assets/star.svg';
import { voteCountBuilder } from '../../../common/vote-count-builder';
import { MovieDetailsView } from '../../../models/movie-details-view.model';

function Movie({
  title,
  releaseDate,
  voteAverage,
  voteCount,
  posterPath,
  genres,
  description,
  duration,
  budget,
  production,
  premiere,
}: MovieDetailsView) {
  return (
    <div className={classes.movie}>
      <div className={classes.route}>
        Movies <span>/</span> {title}
      </div>
      <div className={classes['movie-card']}>
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
          <div className={classes.details}>
            <div className={classes.detail}>
              <span>Duration</span>
              <div>{duration}</div>
            </div>
            <div className={classes.detail}>
              <span>Premiere</span>
              <div>{premiere}</div>
            </div>
            <div className={classes.detail}>
              <span>Budget</span>
              <div>{budget}</div>
            </div>
            <div className={classes.detail}>
              <span>Gross worldwide</span>
              <div>$760,006,945</div>
            </div>
            <div className={classes.detail}>
              <span>Genres</span>
              <div>{` ${genres
                .slice(0, 2)
                .map((genre) => genre.name)
                .join(', ')}`}</div>
            </div>
          </div>
        </div>
        <Button variant="transparent" className={classes.favourite}>
          <Star className={classes.star} />
        </Button>
      </div>
      <div className={classes['movie-data']}>
        <div className={classes['data-block']}>
          <span>Trailer</span>
          <iframe
            className={classes.video}
            src="https://www.youtube.com/embed/kZ_5AIB0aVk?si=BswexdDx-NoqLF4T"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </div>
        <div className={classes.divider} />
        <div className={classes['data-block']}>
          <span>Description</span>
          <div className={classes.description}>{description}</div>
        </div>
        <div className={classes.divider} />
        <div className={classes['data-block']}>
          <span>Production</span>

          {production?.map(({ logoPath, name }) => (
            <div className={classes.company}>
              <img src={logoPath} alt={`${name} logo`} />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(Movie);
