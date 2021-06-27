import React from 'react';
import Header from '../components/Header';
import MovieSlider from '../components/MovieSlider';
import BookingTool from '../components/BookingTool';
import MoviesList from '../components/MoviesList';

export default function HomePage() {
  return (
    <>
      <Header />
      <MovieSlider />
      <BookingTool />
      <MoviesList />
    </>
  );
}
