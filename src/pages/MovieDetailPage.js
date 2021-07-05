import React, { useState } from "react";
import { Tabs, Tab } from "@material-ui/core";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import LichChieu from "../components/LichChieu";
import ThongTin from "../components/ThongTin";


const useStyles = makeStyles((theme) => ({
  movieDetailPage: {
    maxWidth: 940,
    margin: "auto",
    paddingTop: "100px",
  },
}));

function MovieDetailPage() {
  const classes = useStyles();
  const movieDetail = useSelector((state) => {
    return state.movieList.movieDetail;
  });
  // console.log(movieDetail);

  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      <Header />
      <div className={classes.movieDetailPage}>
        <div>
          <h1>{movieDetail.tenPhim}</h1>
          <img src={movieDetail.hinhAnh} alt="" />
        </div>
        <Tabs value={selectedTab} onChange={handleChange} centered>
          <Tab className={classes.label} label="Lịch Chiếu" />
          <Tab className={classes.label} label="Thông Tin" />
        </Tabs>
        {selectedTab === 0 && <LichChieu />}
        {selectedTab === 1 && <ThongTin />}
      </div>
      <Footer />
    </div>
  );
}

export default MovieDetailPage;
