import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "@material-ui/core";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import LichChieu from "../components/LichChieu";
import ThongTin from "../components/ThongTin";
import Grid from "@material-ui/core/Grid";
import format from "date-format";
import { useParams } from "react-router-dom";
import axios from "axios";
import { GET_MOVIE_DETAIL } from "../store/const/movieConst";
import DanhGia from "../components/DanhGia";

const useStyles = makeStyles((theme) => ({
  movieDetailPage: {
    maxWidth: 940,
    margin: "auto",
    paddingTop: "100px",
    color: "white",
  },
  img: {
    width: "100%",
    borderRadius: 8,
    padding: "0 10px",
  },
  detail: {
    padding: "0px 10px",
  },
}));

function MovieDetailPage() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { movieCode } = useParams();

  useEffect(() => {
    return async (movieCode) => {
      try {
        const res = await axios({
          url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${movieCode}`,
          method: "GET",
        });
        dispatch({
          type: GET_MOVIE_DETAIL,
          payload: res.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  }, [dispatch, movieCode]);

  const movieDetail = useSelector((state) => {
    return state.movieList?.movieDetail;
  });

  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const bgDetail = {
    backgroundImage: `url(${movieDetail.hinhAnh})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
  };
  const bgBlur = {
    background: "rgba(10, 32, 41, 0.5)",
    backdropFilter: "blur(20px)",
  };

  return (
    <div style={bgDetail}>
      <Header />
      <div style={bgBlur}>
        <div className={classes.movieDetailPage}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={5}>
              <img className={classes.img} src={movieDetail.hinhAnh} alt="" />
            </Grid>
            <Grid item xs={12} sm={7}>
              <div className={classes.detail}>
                {/* <h1>{movieDetail.tenPhim}</h1> */}
                <p>
                  Ngày khởi chiếu:{" "}
                  {format("MM/dd/yyyy", new Date(movieDetail.ngayKhoiChieu))}
                </p>
                <p>Đánh giá: {movieDetail.danhGia}/10</p>
              </div>
            </Grid>
          </Grid>
          <Tabs value={selectedTab} onChange={handleChange} centered>
            <Tab className={classes.label} label="Lịch Chiếu" />
            <Tab className={classes.label} label="Thông Tin" />
            <Tab className={classes.label} label="Đánh Giá" />
          </Tabs>
          {selectedTab === 0 && <LichChieu />}
          {selectedTab === 1 && <ThongTin />}
          {selectedTab === 2 && <DanhGia />}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default MovieDetailPage;
