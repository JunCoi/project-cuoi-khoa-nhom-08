<<<<<<< HEAD
import axios from "axios";
import { GET_CINEMA_CLUSTER, GET_CINEMA_LIST, GET_CINEMA_MOVIE, GET_LICH_CHIEU, GET_MOVIE } from "../const/cinemaConst";
=======
import axios from 'axios';
import {
  GET_CINEMA_CLUSTER,
  GET_CINEMA_LIST,
  GET_CINEMA_MOVIE,
  GET_MOVIE,
} from '../const/cinemaConst';
>>>>>>> ed5a48da31254ff68547aab20db7486540e8458c

export const getCinemaListAction = () => {
  return async (dispatch) => {
    try {
      const res = await axios({
        url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap',
        method: 'GET',
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
        method: 'GET',
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
        method: 'GET',
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
<<<<<<< HEAD
    return {
        type: GET_MOVIE,
        payload: rap,
    }
}

export const getLichChieuAction = (maPhim, maCumRap) => {
  return {
    type: GET_LICH_CHIEU,
    payload: [maPhim, maCumRap]
  }
}
=======
  return {
    type: GET_MOVIE,
    payload: rap,
  };
};
>>>>>>> ed5a48da31254ff68547aab20db7486540e8458c
