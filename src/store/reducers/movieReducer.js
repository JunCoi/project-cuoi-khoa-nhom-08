import {
  GET_MOVIE_DETAIL,
  GET_MOVIE_DETAIL_CLUSTER,
  GET_MOVIE_LIST_NOW_SHOWING,
  GET_MOVIE_LIST_UP_COMING,
  REMOVE_CURRENT_MOVIE_DETAIL,
} from '../const/movieConst';

const initialState = {
  movieListNowShowing: [],
  movieListUpComing: [],
  movieDetail: [],
  movieDetailCluster: [],
};

export const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MOVIE_LIST_NOW_SHOWING:
      state.movieListNowShowing = payload;
      return { ...state };
    case GET_MOVIE_LIST_UP_COMING:
      state.movieListUpComing = payload;
      return { ...state };
    case GET_MOVIE_DETAIL: {
      state.movieDetail = payload;
      return { ...state };
    }
    case GET_MOVIE_DETAIL_CLUSTER: {
      // console.log("payload",payload);
      let newMovieDetail = { ...state.movieDetail };
      state.movieDetailCluster = [];
      // console.log(payload);
      // const index = newMovieDetail.lichChieu.findIndex((rap) => rap.thongTinRap.maCumRap === payload);
      for (let i = 0; i < newMovieDetail.lichChieu.length; i++) {
        if (newMovieDetail.lichChieu[i].thongTinRap.maCumRap === payload) {
          state.movieDetailCluster.push(newMovieDetail.lichChieu[i]);
        }
      }

      // console.log(newMovieDetail.lichChieu[index]);
      // state.movieDetailCluster.push(newMovieDetail.lichChieu[index]);
      // console.log(state.movieDetailCluster);
      return { ...state };
    }
    case REMOVE_CURRENT_MOVIE_DETAIL: {
      state.movieDetailCluster = [];
      return { ...state };
    }
    default:
      return { ...state };
  }
};
