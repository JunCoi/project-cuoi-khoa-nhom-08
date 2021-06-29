import { GET_CINEMA_CLUSTER, GET_CINEMA_LIST, GET_CINEMA_MOVIE, GET_MOVIE } from "../const/cinemaConst";

const initialState = {
  cinemaList: [],
  cinemaCluster: [],
  cinemaMovie: [],
  movie: [],
};

export const cinemaReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_CINEMA_LIST: {
            state.cinemaList = payload;
            return {...state};
        }
        case GET_CINEMA_CLUSTER: {
            state.cinemaCluster = payload;
            state.movie = [];
            return {...state};
        }
        case GET_CINEMA_MOVIE: {
            state.cinemaMovie = payload;
            return {...state};
        }
        case GET_MOVIE: {
            let myCinemaMovie = [...state.cinemaMovie];
            const index = myCinemaMovie[0].lstCumRap.findIndex((rap) => rap.maCumRap === payload);
            // console.log(myCinemaMovie[0].lstCumRap[index]);
            state.movie = myCinemaMovie[0].lstCumRap[index];
            // console.log("cinemaMovie", state.cinemaMovie);
            return {...state};
        }
        default:
            return {...state};
    }
}
