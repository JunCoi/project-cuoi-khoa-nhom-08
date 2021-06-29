import React, { useEffect } from 'react';
import Header from '../components/Header';
import MovieSlider from '../components/MovieSlider';
import BookingTool from '../components/BookingTool';
import MoviesList from '../components/MoviesList';
import BlockApp from '../components/BlockApp';

import { useDispatch } from 'react-redux';
import { getMovieListAction } from '../store/actions/movieAction';
import Cinema from '../components/Cinema';
import { getCinemaListAction } from '../store/actions/cinemaAction';
import News from '../components/News';
import Footer from '../components/Footer';

export default function HomePage() {
  const dangChieu = 'GP01';
  const sapChieu = 'GP02';
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieListAction(dangChieu));
  }, [dangChieu, dispatch]);
  useEffect(() => {
    dispatch(getMovieListAction(sapChieu));
  }, [sapChieu, dispatch]);
  useEffect(() => {
    dispatch(getCinemaListAction());
  }, [dispatch]);
  return (
    <>
      <Header />
      <MovieSlider />
      <BookingTool />
      <MoviesList />
      <Cinema />
      <News />
      <BlockApp />
      <Footer />
      {/* <div style={{ height: "100px" }}></div> */}
    </>
  );
}
