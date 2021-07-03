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
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  BookingPage: {
    maxWidth: 940,
    margin: "auto",
    paddingTop: "100px",
  },
  choiceChair: {
    backgroundColor: "#6645fd",
    "&:hover": {
      backgroundColor: "#6645fd",
    },
  },
  table: {
    minWidth: 650,
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
        <Button
          className={chair.dangChon ? classes.choiceChair : ""}
          onClick={() => handleChoice(chair)}
          disabled={chair.daDat}
          variant="contained"
          color={chair.daDat ? "primary" : "secondary"}
          key={index}
        >
          {chair.tenGhe}
        </Button>
      );
    });
  };

  const renderTable = () => {
    return listChair?.map((chair, index) => {
      if (chair.dangChon) {
        return (
          <TableRow key={index}>
            <TableCell>{chair.maGhe}</TableCell>
            <TableCell>{chair.tenGhe}</TableCell>
            <TableCell>{chair.maRap}</TableCell>
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
        <div>{renderListChair()}</div>
        <div>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Mã ghế</TableCell>
                  <TableCell>Tên ghế</TableCell>
                  <TableCell>Mã rạp</TableCell>
                  <TableCell>Loại ghế</TableCell>
                  <TableCell>Giá vé</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {renderTable()}
                <TableRow>
                  <TableCell>Tổng cộng</TableCell>
                  <TableCell colSpan="3"></TableCell>
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
    </div>
  );
}

export default BookingPage;
