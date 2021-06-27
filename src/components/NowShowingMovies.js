import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from 'react-slick';
import MovieCard from './MovieCard';

const useStyles = makeStyles({
  cardContainer: {
    padding: '10px 10px',
  },
  arrow: {
    backgroundColor: 'black',
  },
});

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        right: '-50px',
        zIndex: 2,
        '&:before': {
          color: 'black',
        },
      }}
      onClick={onClick}
    />
  );
};

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        left: '-50px',
        zIndex: 2,
      }}
      onClick={onClick}
    />
  );
};

export default function NowShowingMovies() {
  const classes = useStyles();

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    rows: 2,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
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
