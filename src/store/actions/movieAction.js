import axios from 'axios';
import {
  GET_MOVIE_DETAIL,
  GET_MOVIE_DETAIL_CLUSTER,
  GET_MOVIE_LIST_NOW_SHOWING,
  GET_MOVIE_LIST_UP_COMING,
  REMOVE_CURRENT_MOVIE_DETAIL,
} from '../const/movieConst';

export const getMovieListNowShowingAction = () => {
  return async (dispatch) => {
    try {
      const res = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
        method: 'GET',
      });
      //   console.log(res.data);
      dispatch({
        type: GET_MOVIE_LIST_NOW_SHOWING,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const getMovieListUpComingAction = () => {
  return async (dispatch) => {
    try {
      const res = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02`,
        method: 'GET',
      });
      //   console.log(res.data);
      dispatch({
        type: GET_MOVIE_LIST_UP_COMING,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getMovieDetailAction = (maPhim) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
        method: 'GET',
      });
      dispatch({
        type: GET_MOVIE_DETAIL,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getMovieDetailClusterAction = (rap) => {
  return {
    type: GET_MOVIE_DETAIL_CLUSTER,
    payload: rap,
  };
};

export const removeCurrentMovieDetailAction = () => {
  return {
    type: REMOVE_CURRENT_MOVIE_DETAIL,
  };
};
