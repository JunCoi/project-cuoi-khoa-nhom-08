import {
  GET_CINEMA_CLUSTER,
  GET_CINEMA_LIST,
  GET_CINEMA_MOVIE,
  GET_MOVIE,
  LAY_CHI_TIET_PHIM,
  LAY_NGAY_XEM,
  LAY_TEN_PHIM,
} from "../const/cinemaConst";
import format from "date-format";
import { CHANGE_MOVIE, GET_DANH_SACH_RAP } from "../const/adminConst";
const initialState = {
  cinemaList: [],
  cinemaCluster: [],
  cinemaMovie: [],
  movie: [],
  tenPhim: "",
  ngayChieu: [],
  gioChieu: [],
  chiTietPhim: {},
  danhSachRap: [],
};

export const cinemaReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CINEMA_LIST: {
      state.cinemaList = payload;
      return { ...state };
    }
    case GET_CINEMA_CLUSTER: {
      state.cinemaCluster = payload;
      state.movie = [];
      state.danhSachRap = [];
      return { ...state };
    }
    case GET_CINEMA_MOVIE: {
      state.cinemaMovie = payload;
      return { ...state };
    }
    case GET_MOVIE: {
      state.tenPhim = "";
      state.ngayChieu = [];
      state.gioChieu = [];
      state.chiTietPhim = [];
      let myCinemaMovie = [...state.cinemaMovie];
      const index = myCinemaMovie[0].lstCumRap.findIndex(
        (rap) => rap.maCumRap === payload
      );
      state.movie = myCinemaMovie[0].lstCumRap[index];
      return { ...state };
    }
    case LAY_TEN_PHIM: {
      state.gioChieu = [];
      state.tenPhim = payload;
      state.chiTietPhim = [];
      let text = [];
      for (let i = 0; i < state.movie?.danhSachPhim.length; i++) {
        if (state.movie?.danhSachPhim[i].tenPhim === payload) {
          text.push(state.movie?.danhSachPhim[i]);
        }
      }
      let locNgayXem = [];
      for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < text[i].lstLichChieuTheoPhim.length; j++) {
          if (
            locNgayXem.indexOf(
              format(
                "dd/MM/yyyy",
                new Date(text[i].lstLichChieuTheoPhim[j].ngayChieuGioChieu)
              )
            ) === -1
          ) {
            locNgayXem.push(
              format(
                "dd/MM/yyyy",
                new Date(text[i].lstLichChieuTheoPhim[j].ngayChieuGioChieu)
              )
            );
          }
        }
      }
      state.ngayChieu = locNgayXem;
      return { ...state };
    }
    case LAY_NGAY_XEM: {
      let locGioChieu = [];
      state.chiTietPhim = [];
      for (let i = 0; i < state.movie?.danhSachPhim.length; i++) {
        for (
          let j = 0;
          j < state.movie?.danhSachPhim[i]?.lstLichChieuTheoPhim.length;
          j++
        ) {
          if (
            state.movie?.danhSachPhim[i].tenPhim === state.tenPhim &&
            format(
              "dd/MM/yyyy",
              new Date(
                state.movie?.danhSachPhim[i].lstLichChieuTheoPhim[
                  j
                ].ngayChieuGioChieu
              )
            ) === payload
          ) {
            locGioChieu.push(
              format(
                "hh:mm",
                new Date(
                  state.movie?.danhSachPhim[i].lstLichChieuTheoPhim[
                    j
                  ].ngayChieuGioChieu
                )
              )
            );
          }
        }
      }
      state.gioChieu = locGioChieu;
      return { ...state };
    }
    case LAY_CHI_TIET_PHIM: {
      state.chiTietPhim = {};
      for (let i = 0; i < state.movie?.danhSachPhim.length; i++) {
        for (
          let j = 0;
          j < state.movie?.danhSachPhim[i]?.lstLichChieuTheoPhim.length;
          j++
        ) {
          if (
            format(
              "dd/MM/yyyy",
              new Date(
                state.movie?.danhSachPhim[i].lstLichChieuTheoPhim[
                  j
                ].ngayChieuGioChieu
              )
            ) === payload[1] &&
            format(
              "hh:mm",
              new Date(
                state.movie?.danhSachPhim[i].lstLichChieuTheoPhim[
                  j
                ].ngayChieuGioChieu
              )
            ) === payload[0]
          ) {
            state.chiTietPhim =
              state.movie?.danhSachPhim[i].lstLichChieuTheoPhim[j];
          }
        }
      }
      return { ...state };
    }
    case GET_DANH_SACH_RAP: {
      for (let i = 0; i < payload[0].length; i++) {
        if (payload[0][i].maCumRap === payload[1]) {
          state.danhSachRap = payload[0][i];
        }
      }
      return { ...state };
    }
    case CHANGE_MOVIE: {
      state.cinemaCluster = [];
      state.danhSachRap = [];
      return { ...state };
    }
    default:
      return { ...state };
  }
};
