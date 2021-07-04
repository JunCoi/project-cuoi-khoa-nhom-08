import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCinemaClusterAction,
  getCinemaListAction,
} from "../store/actions/cinemaAction";
import {
  getMovieDetailAction,
  getMovieDetailClusterAction,
  removeCurrentMovieDetailAction,
} from "../store/actions/movieAction";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import format from "date-format";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  LichChieu: {
    maxWidth: 940,
    margin: "auto",
    paddingTop: "400px",
  },
  table: {
    minWidth: 650,
    height: 700,
  },
  fixoverflow: {
    overflow: "auto",
    height: "100%",
  },
  col1: {
    width: 96.5,
    padding: 5,
    borderRight: "1px solid rgba(224, 224, 224, 1)",
  },
  col2: {
    width: "30%",
    padding: 5,
    borderRight: "1px solid rgba(224, 224, 224, 1)",
  },
  cumRap: {
    cursor: "pointer",
    fontWeight: 700,
  },
  label: {
    fontWeight: 700,
  },
}));

function LichChieu(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { movieCode } = props.match.params;

  useEffect(() => {
    dispatch(getMovieDetailAction(movieCode));
  }, [movieCode, dispatch]);
  useEffect(() => {
    dispatch(getCinemaListAction());
  }, [dispatch]);

  const cinemaList = useSelector((state) => {
    return state.cinema.cinemaList;
  });

  // ------------------------------------ COL-1 -----------------------------------------
  const renderCol1 = () => {
    return cinemaList?.map((cinema, index) => {
      return (
        <TableRow key={index}>
          <TableCell style={{ padding: 10 }}>
            <Button onClick={() => handleChoiceCinema(cinema.maHeThongRap)}>
              <img width="50px" src={cinema.logo} alt="" />
            </Button>
          </TableCell>
        </TableRow>
      );
    });
  };
  const handleChoiceCinema = (cinema) => {
    dispatch(getCinemaClusterAction(cinema));
    dispatch(removeCurrentMovieDetailAction());
  };

  // ------------------------------------ COL-2 -----------------------------------------
  const cinemaCluster = useSelector((state) => {
    return state.cinema.cinemaCluster;
  });
  const handleChoiceMovie = (cluster) => {
    dispatch(getMovieDetailClusterAction(cluster));
  };

  const renderCol2 = () => {
    return cinemaCluster?.map((cluster, index) => {
      return (
        <TableRow key={index}>
          <TableCell
            onClick={() => handleChoiceMovie(cluster.maCumRap)}
            className={classes.cumRap}
          >
            <p>{cluster.maCumRap}</p>
            <p style={{ fontSize: 12, color: "rgba(0,0,0, .4)" }}>
              {cluster.diaChi}
            </p>
          </TableCell>
        </TableRow>
      );
    });
  };

  // ------------------------------------ COL-3 -----------------------------------------

  const movieDetailCluster = useSelector((state) => {
    return state.movieList.movieDetailCluster;
  });
  // console.log(movieDetailCluster);

  const renderCol3 = () => {
    if (movieDetailCluster?.length < 1) {
      return <p>rạp không có lịch chiếu phim</p>;
    } else {
      return movieDetailCluster?.map((movie, index) => {
        return (
          <TableRow key={index}>
            <TableCell>
              <p>Tên phim: {movie.tenPhim}</p>
              <p>Giá vé: {movie.giaVe}</p>
              <Link to={`/booking/${movie.maLichChieu}`}>
                Ngày chiếu - Giờ chiếu:
                {format("MM/dd/yy - hh:mm", new Date(movie.ngayChieuGioChieu))}
              </Link>
              <p>Thời Lượng: {movie.thoiLuong}</p>
              <p>{movie.thongTinRap.tenRap}</p>
              <p>Tên cụm rạp: {movie.thongTinRap.tenCumRap}</p>
            </TableCell>
          </TableRow>
        );
      });
    }
  };


  return (
    <div className={classes.LichChieu}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead></TableHead>
          <TableBody>
            <TableRow>
              <TableCell className={classes.col1}>
                <div className={classes.fixoverflow}>{renderCol1()}</div>
              </TableCell>

              <TableCell className={classes.col2}>
                <div className={classes.fixoverflow}> {renderCol2()}</div>
              </TableCell>

              <TableCell className={classes.col3}>
                <div className={classes.fixoverflow}> {renderCol3()}</div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default withRouter(LichChieu);
