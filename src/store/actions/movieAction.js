import axios from 'axios';
import { GET_MOVIE_LIST } from "../const/movieConst";

export const getMovieListAction = (maNhom) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?${maNhom}`,
        method: "GET",
      });
    //   console.log(res.data);
      dispatch({
        type: GET_MOVIE_LIST,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
