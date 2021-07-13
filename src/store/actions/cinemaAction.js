import axios from "axios";
import {
  GET_CINEMA_CLUSTER,
  GET_CINEMA_LIST,
  GET_CINEMA_MOVIE,
  GET_MOVIE,
  LAY_CHI_TIET_PHIM,
  LAY_NGAY_XEM,
  LAY_TEN_PHIM,
} from "../const/cinemaConst";

export const getCinemaListAction = () => {
  return async (dispatch) => {
    try {
      const res = await axios({
        url: "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
        method: "GET",
      });
      //   console.log(res.data);
      dispatch({
        type: GET_CINEMA_LIST,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCinemaClusterAction = (maRap) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maRap}`,
        method: "GET",
      });
      dispatch({
        type: GET_CINEMA_CLUSTER,
        payload: res.data,
      });
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCinemaMovieAction = (maRap) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maRap}&maNhom=GP01`,
        method: "GET",
      });
      dispatch({
        type: GET_CINEMA_MOVIE,
        payload: res.data,
      });
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
};

export const getMovieAction = (rap) => {
  return {
    type: GET_MOVIE,
    payload: rap,
  };
};

export const layTenPhimAction = (tenPhim) => {
  return {
    type: LAY_TEN_PHIM,
    payload: tenPhim,
  };
};

export const layNgayXemAction = (ngayXem) => {
  return {
    type: LAY_NGAY_XEM,
    payload: ngayXem,
  };
};

export const layChiTietAction = (gio, ngayXem) => {
  return {
    type: LAY_CHI_TIET_PHIM,
    payload: [gio, ngayXem],
  };
};
