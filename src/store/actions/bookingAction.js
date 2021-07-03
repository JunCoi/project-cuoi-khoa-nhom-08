import axios from "axios";
import { CHOICE_CHAIR, GET_CHAIR_LIST } from "../const/bookingConst";

export const getTicketListAction = (maLichChieu) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "GET",
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
      });
      dispatch({
        type: GET_CHAIR_LIST,
        payload: res.data.danhSachGhe,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const choiceChairAction = (chair) => {
  return {
    type: CHOICE_CHAIR,
    payload: chair,
  };
};

export const bookingTicketAction = (maLichChieu, danhSachVe, history) => {
  return async (dispatch) => {
    try {
      // get localStorage
      const token = JSON.parse(localStorage.getItem("token"));
      const taiKhoan = JSON.parse(localStorage.getItem("taiKhoan"));

      const res = await axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
        method: "POST",
        data: {
          maLichChieu,
          danhSachVe,
          taiKhoanNguoiDung: taiKhoan,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("đặt vé thành công");
      history.push("/");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
};
