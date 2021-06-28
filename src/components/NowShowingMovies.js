import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from 'react-slick';
import MovieCard from './MovieCard';
import { useSelector } from 'react-redux';

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
  const movieList = useSelector((state) => {
    return state.movieList.movieListNowShowing;
  });
  // console.log("movieList", movieList);
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
  
  const renderMovieListNowShowing = () => {
    return movieList?.map((movie, index) => {
      return <div key={index} className={classes.cardContainer}>
        <MovieCard showRating={true} movie={movie}/>
      </div>
    })
  }

  return (
    <Slider {...settings}>
      {renderMovieListNowShowing()}
    </Slider>
  );
}
