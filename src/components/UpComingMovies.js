import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from 'react-slick';
import MovieCard from './MovieCard';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  cardContainer: {
    padding: '20px 10px',
  },
});

export default function UpComingMovies() {
  const classes = useStyles();
  const movieList = useSelector((state) => {
    return state.movieList.movieListUpComing;
  });

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    rows: 2,
  };

  const renderMovieListUpComing = () => {
    return movieList?.map((movie, index) => {
      return <div key={index} className={classes.cardContainer}>
        <MovieCard showRating={false} movie={movie}/>
      </div>
    })
  }

  return (
    <Slider {...settings}>
      {renderMovieListUpComing()}
    </Slider>
  );
}
