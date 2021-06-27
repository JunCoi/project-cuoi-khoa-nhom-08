import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from 'react-slick';
import MovieCard from './MovieCard';

const useStyles = makeStyles({
  cardContainer: {
    padding: '10px 10px',
  },
});

export default function NowShowingMovies() {
  const classes = useStyles();

  const settings = {
    infinite: true,
    speed: 1500,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    rows: 2,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: true,
          rows: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          rows: 2,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className={classes.cardContainer}>
        <MovieCard showRating={true} />
      </div>
      <div className={classes.cardContainer}>
        <MovieCard showRating={true} />
      </div>
      <div className={classes.cardContainer}>
        <MovieCard showRating={true} />
      </div>
      <div className={classes.cardContainer}>
        <MovieCard showRating={true} />
      </div>
      <div className={classes.cardContainer}>
        <MovieCard showRating={true} />
      </div>
      <div className={classes.cardContainer}>
        <MovieCard showRating={true} />
      </div>
      <div className={classes.cardContainer}>
        <MovieCard showRating={true} />
      </div>
      <div className={classes.cardContainer}>
        <MovieCard showRating={true} />
      </div>
      <div className={classes.cardContainer}>
        <MovieCard showRating={true} />
      </div>
      <div className={classes.cardContainer}>
        <MovieCard showRating={true} />
      </div>
      <div className={classes.cardContainer}>
        <MovieCard showRating={true} />
      </div>
      <div className={classes.cardContainer}>
        <MovieCard showRating={true} />
      </div>
      <div className={classes.cardContainer}>
        <MovieCard showRating={true} />
      </div>
      <div className={classes.cardContainer}>
        <MovieCard showRating={true} />
      </div>
      <div className={classes.cardContainer}>
        <MovieCard showRating={true} />
      </div>
      <div className={classes.cardContainer}>
        <MovieCard showRating={true} />
      </div>
      <div className={classes.cardContainer}>
        <MovieCard showRating={true} />
      </div>
      <div className={classes.cardContainer}>
        <MovieCard showRating={true} />
      </div>
    </Slider>
  );
}
