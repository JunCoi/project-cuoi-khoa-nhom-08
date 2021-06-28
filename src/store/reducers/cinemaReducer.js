import {
  GET_CINEMA_CLUSTER,
  GET_CINEMA_LIST,
  GET_CINEMA_MOVIE,
  GET_LICH_CHIEU,
  GET_MOVIE,
} from "../const/cinemaConst";

const initialState = {
  cinemaList: [],
  cinemaCluster: [],
  cinemaMovie: [],
  movie: [],
  lichChieu: [],
};

export const cinemaReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CINEMA_LIST: {
      state.cinemaList = payload;
      return { ...state };
    }
    case GET_CINEMA_CLUSTER: {
      state.cinemaCluster = payload;
      return { ...state };
    }
    case GET_CINEMA_MOVIE: {
      state.cinemaMovie = payload;
      return { ...state };
    }
    case GET_MOVIE: {
      let myCinemaMovie = [...state.cinemaMovie];
      const index = myCinemaMovie[0].lstCumRap.findIndex(
        (rap) => rap.maCumRap === payload
      );
      // console.log(myCinemaMovie[0].lstCumRap[index]);
      state.movie = myCinemaMovie[0].lstCumRap[index];
      // console.log("cinemaMovie", state.cinemaMovie);
      return { ...state };
    }
    case GET_LICH_CHIEU: {
      const newCinemaMovie = [...state.cinemaMovie];
      //   console.log(payload);
      //   console.log("cinemaMovie", newCinemaMovie);
      const index = newCinemaMovie[0].lstCumRap.findIndex(
        (rap) => rap.maCumRap === payload[1]
      );
      const lichChieu = newCinemaMovie[0].lstCumRap[index].danhSachPhim;
      //   console.log(lichChieu);
      const index1 = lichChieu.findIndex(
        (lichChieu) => lichChieu.maPhim === payload[0]
      );
      //   console.log(index1);
      state.lichChieu = lichChieu[index1].lstLichChieuTheoPhim;
      //   console.log(state.lichChieu);
      return { ...state };
    }
    default:
      return { ...state };
  }
};
