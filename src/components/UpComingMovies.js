import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from 'react-slick';
import MovieCard from './MovieCard';

const useStyles = makeStyles({
  cardContainer: {
    padding: '20px 10px',
  },
});

export default function UpComingMovies() {
  const classes = useStyles();

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    rows: 2,
  };

  return (
    <Slider {...settings}>
      <div className={classes.cardContainer}>
        <MovieCard />
      </div>
      <div className={classes.cardContainer}>
        <MovieCard />
      </div>
      <div className={classes.cardContainer}>
        <MovieCard />
      </div>
      <div className={classes.cardContainer}>
        <MovieCard />
      </div>
      <div className={classes.cardContainer}>
        <MovieCard />
      </div>
      <div className={classes.cardContainer}>
        <MovieCard />
      </div>
      <div className={classes.cardContainer}>
        <MovieCard />
      </div>
      <div className={classes.cardContainer}>
        <MovieCard />
      </div>
      <div className={classes.cardContainer}>
        <MovieCard />
      </div>
      <div className={classes.cardContainer}>
        <MovieCard />
      </div>
      <div className={classes.cardContainer}>
        <MovieCard />
      </div>
      <div className={classes.cardContainer}>
        <MovieCard />
      </div>
      <div className={classes.cardContainer}>
        <MovieCard />
      </div>
      <div className={classes.cardContainer}>
        <MovieCard />
      </div>
      <div className={classes.cardContainer}>
        <MovieCard />
      </div>
      <div className={classes.cardContainer}>
        <MovieCard />
      </div>
      <div className={classes.cardContainer}>
        <MovieCard />
      </div>
    </Slider>
  );
}
