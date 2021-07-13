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
  getMovieAction,
  layTenPhimAction,
  layNgayXemAction,
  layChiTietAction,
} from "../store/actions/cinemaAction";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  cinemaList: {
    maxWidth: 940,
    margin: "auto",
    paddingTop: "100px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
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
}));

function Cinema() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
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
            <p>{cluster.tenCumRap}</p>
            <p style={{ fontSize: 12, color: "rgba(0,0,0, .4)" }}>
              {cluster.diaChi}
            </p>
          </TableCell>
        </TableRow>
      );
    });
  };

  // ------------------------------------ COL-3 -----------------------------------------

  const cinemaMovie = useSelector((state) => {
    return state.cinema?.movie;
  });
  const ngayChieu = useSelector((state) => {
    return state.cinema?.ngayChieu;
  });
  const tenPhim = useSelector((state) => {
    return state.cinema?.tenPhim;
  });
  const gioChieu = useSelector((state) => {
    return state.cinema?.gioChieu;
  });

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
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img width="50px" src={movie.hinhAnh} alt="" />
              </Grid>
              <Grid item xs={6}>
                <Button onClick={() => handleLayTenPhim(movie.tenPhim)}>
                  {movie.tenPhim}
                </Button>
                {tenPhim === movie.tenPhim ? renderNgayChieu() : ""}
              </Grid>
              <Grid item xs={3}>
                <Button>
                  {tenPhim === movie.tenPhim ? renderGioChieu() : ""}
                </Button>
              </Grid>
            </Grid>
          </TableCell>
        </TableRow>
      );
    });
  };
  const handleLayTenPhim = (tenPhim) => {
    dispatch(layTenPhimAction(tenPhim));
  };

  const renderNgayChieu = () => {
    return ngayChieu?.map((ngay, index) => {
      return (
        <div key={index}>
          <Button
            onClick={() => {
              handleLayNgayXem(ngay);
            }}
          >
            {ngay}
          </Button>
        </div>
      );
    });
  };
  const [ngayXem, setNgayXem] = useState("");

  const handleLayNgayXem = (ngayXem) => {
    dispatch(layNgayXemAction(ngayXem));
    setNgayXem(ngayXem);
  };

  const renderGioChieu = () => {
    return gioChieu.map((gio, index) => {
      return (
        <Button
          key={index}
          onClick={() => {
            handleLayChiTiet(gio);
          }}
        >
          {gio}
        </Button>
      );
    });
  };

  const handleLayChiTiet = (gio) => {
    dispatch(layChiTietAction(gio, ngayXem));
    if (maLichChieu !== undefined) {
      localStorage.setItem("maLichChieu", JSON.stringify(maLichChieu));
      history.push(`/booking/${maLichChieu}`);
    }
  };

  const maLichChieu = useSelector((state) => {
    return state.cinema?.chiTietPhim?.maLichChieu;
  });

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

export default Cinema;
