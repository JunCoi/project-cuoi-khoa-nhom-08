import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Header from "../components/Header";
import { makeStyles } from "@material-ui/core/styles";
import {
  bookingTicketAction,
  choiceChairAction,
  getTicketListAction,
} from "../store/actions/bookingAction";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button, Container, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  BookingPage: {
    paddingTop: "100px",
  },
  choiceChair: {
    backgroundColor: "#6645fd !important",
    color: "white",
    "&:hover": {
      backgroundColor: "#6645fd",
    },
  },
  gheVip: {
    backgroundColor: "rgb(216,100,6) !important",
  },
  daDat: {
    cursor: "no-drop !important",
  },
}));

function BookingPage() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { showTimeCode } = useParams();
  // console.log(showTimeCode);
  useEffect(() => {
    dispatch(getTicketListAction(showTimeCode));
  }, [dispatch, showTimeCode]);

  const thongTinPhim = useSelector((state) => {
    return state.booking.thongTinPhim.thongTinPhim;
  });

  const listChair = useSelector((state) => {
    return state.booking.listChair;
  });
  //   console.log(listChair);

  const [isValid, setIsValid] = useState(true);
  const chairDangChon = listChair.filter((chair) => chair.dangChon);
  useEffect(() => {
    if (chairDangChon.length > 0) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [chairDangChon]);

  const handleChoice = (chair) => {
    dispatch(choiceChairAction(chair));
  };

  const handleBooking = () => {
    const listChairChoice = listChair.filter((chair) => chair.dangChon);
    dispatch(bookingTicketAction(showTimeCode, listChairChoice, history));
  };

  const renderListChair = () => {
    return listChair?.map((chair, index) => {
      return (
        <>
          <button
            key={index}
            style={{
              cursor: `${chair.daDat ? "no-drop" : "pointer"}`,
              width: "35px",
              height: "35px",
              margin: "5px",
              borderRadius: "5px",
              border: "none",
              color: "white",
              backgroundColor: `${chair.daDat ? "black" : "rgb(116,112,112)"}`,
            }}
            className={
              chair.dangChon
                ? classes.choiceChair
                : "" || chair.loaiGhe === "Vip"
                ? classes.gheVip
                : ""
            }
            onClick={() => handleChoice(chair)}
            disabled={chair.daDat}
            variant="contained"
            key={index}
          >
            {chair.tenGhe}
          </button>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </>
      );
    });
  };

  const renderTable = () => {
    return listChair?.map((chair, index) => {
      if (chair.dangChon) {
        return (
          <TableRow key={index}>
            <TableCell>{chair.tenGhe}</TableCell>
            <TableCell>{chair.loaiGhe}</TableCell>
            <TableCell>{chair.giaVe}</TableCell>
          </TableRow>
        );
      }
    });
  };

  return (
    <div>
      <Header />
      <div className={classes.BookingPage}>
        <Container>
          <Grid container spacing={3}>
            <Grid item md={8}>
              <div>
                <img src="https://tix.vn/app/assets/img/icons/screen.png" />
              </div>
              <div style={{ textAlign: "center" }}>{renderListChair()}</div>
            </Grid>
            <Grid item md={4}>
              <img
                src={thongTinPhim?.hinhAnh}
                alt=""
                width="100%"
                height="auto"
              />
              <p>Tên phim: {thongTinPhim?.tenPhim}</p>
              <p>
                Rạp: {thongTinPhim?.tenCumRap} - Địa chỉ: {thongTinPhim?.diaChi}{" "}
                - {thongTinPhim?.tenRap}
              </p>
              <p>
                Ngày chiếu: {thongTinPhim?.ngayChieu} - Giờ chiếu:{" "}
                {thongTinPhim?.gioChieu}
              </p>
              <br />
              <hr />
              <br />
              <div>
                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Ghế</TableCell>
                        <TableCell>Loại ghế</TableCell>
                        <TableCell>Giá vé</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {renderTable()}
                      <TableRow>
                        <TableCell>Tổng tiền:</TableCell>
                        <TableCell colSpan="1"></TableCell>
                        <TableCell>
                          {listChair
                            .filter((chair) => chair.dangChon)
                            .reduce(
                              (tongTien, chair) => (tongTien += chair.giaVe),
                              0
                            )}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
              <div style={{ textAlign: "center", margin: "30px" }}>
                <Button
                  disabled={isValid}
                  onClick={handleBooking}
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Booking
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default BookingPage;
