import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";

import {
  getCinemaClusterAction,
  getCinemaMovieAction,
  getLichChieuAction,
  getMovieAction,
} from "../store/actions/cinemaAction";
import Grid from "@material-ui/core/Grid";
import format from "date-format";


const useStyles = makeStyles((theme) => ({
  cinemaList: {
    maxWidth: 940,
    margin: 'auto',
    paddingTop: '100px',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  table: {
    minWidth: 650,
    height: 700,
  },
  fixoverflow: {
    overflow: 'auto',
    height: '100%',
  },
  col1: {
    width: 96.5,
    padding: 5,
    borderRight: '1px solid rgba(224, 224, 224, 1)',
  },
  col2: {
    width: '30%',
    padding: 5,
    borderRight: '1px solid rgba(224, 224, 224, 1)',
  },
  cumRap: {
    cursor: 'pointer',
    fontWeight: 700,
  },
}));

function Cinema() {
  const classes = useStyles();
  const dispatch = useDispatch();
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
    dispatch(getCinemaMovieAction(cinema));
  };

  // ------------------------------------ COL-2 -----------------------------------------
  const cinemaCluster = useSelector((state) => {
    return state.cinema.cinemaCluster;
  });
  const handleChoiceMovie = (cluster) => {
    dispatch(getMovieAction(cluster));
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
            <p style={{ fontSize: 12, color: 'rgba(0,0,0, .4)' }}>
              {cluster.diaChi}
            </p>
          </TableCell>
        </TableRow>
      );
    });
  };

  // ------------------------------------ COL-3 -----------------------------------------

  const cinemaMovie = useSelector((state) => {
    return state.cinema.movie;
  });
  // console.log(cinemaMovie);

  const renderCol3 = () => {
    return cinemaMovie?.danhSachPhim?.map((movie, index) => {
      return (
        <TableRow key={index}>
          <TableCell style={{ height: 110, minHeight: 110, padding: 5 }}>
            <Grid container spacing={3}>
              <Grid
                item
                xs={3}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  onClick={() => {
                    showLichChieu(movie.maPhim, cinemaMovie.maCumRap);
                  }}
                  width="50px"
                  src={movie.hinhAnh}
                  alt=""
                />
              </Grid>
              <Grid item xs={9}>
                <h4>{movie.tenPhim}</h4>
                <p>{movie.maPhim}</p>
                <hr />
                {/* <p>{movie.lstLichChieuTheoPhim?.map((lichChieu) => {
                    return (
                      <div>
                        <p>{lichChieu.tenRap}</p>
                        <p>
                          Ngày chiếu - Giờ chiếu:{" "}
                          {format("MM/dd/yy - hh:mm", new Date(lichChieu.ngayChieuGioChieu))}
                        </p>
                      </div>
                    );
                  })}</p> */}
              </Grid>
            </Grid>
          </TableCell>
        </TableRow>
      );
    });
  };

  // ------------------------------------ COL-4 -----------------------------------------

  const showLichChieu = (maPhim, maCumRap) => {
    dispatch(getLichChieuAction(maPhim, maCumRap));
  };
  const lichChieu = useSelector((state) => {
    return state.cinema.lichChieu;
  });
  // console.log(lichChieu);

  const renderCol4 = () => {
    return lichChieu?.map((lichChieu, index) => {
      return (
        <div>
          <p>{lichChieu.tenRap}</p>
          <p>
            Ngày chiếu - Giờ chiếu:{" "}
            {format("MM/dd/yy - hh:mm", new Date(lichChieu.ngayChieuGioChieu))}
          </p>
          <p>Thời lượng: 120 phút</p>
          <hr />
        </div>
      );
    });
  };

  return (
    <div className={classes.cinemaList}>
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
              <TableCell>
                <TableCell>
                  <div className={classes.fixoverflow}> {renderCol3()}</div>
                </TableCell>
                <TableCell>
                  <div className={classes.fixoverflow}> {renderCol4()}</div>
                </TableCell>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Cinema;
