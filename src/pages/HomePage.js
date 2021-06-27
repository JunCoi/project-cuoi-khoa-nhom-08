import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import MovieSlider from "../components/MovieSlider";
import BookingTool from "../components/BookingTool";
import MoviesList from "../components/MoviesList";
import { useDispatch } from "react-redux";
import { getMovieListAction } from "../store/actions/movieAction";

export default function HomePage() {
  const [dangChieu, setDangChieu] = useState("GP01")
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieListAction(dangChieu));
  });
  return (
    <>
      <Header />
      <MovieSlider />
      <BookingTool />
      <MoviesList />
      <div style={{ height: "100px" }}></div>
    </>
  );
}
