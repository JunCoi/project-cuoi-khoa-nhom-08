import { GET_MOVIE_LIST } from "../const/movieConst";

const initialState = {
  movieListNowShowing: [],
  movieListUpComing: [],
};

export const movieReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_MOVIE_LIST:
            state.movieListNowShowing = payload;
            state.movieListUpComing = payload;
            return {...state};
        default:
            return {...state};
    }
};
