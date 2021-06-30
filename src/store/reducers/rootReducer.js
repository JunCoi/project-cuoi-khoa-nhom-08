import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { cinemaReducer } from './cinemaReducer';
import { movieReducer } from './movieReducer';
import { popupReducer } from './popupReducer';

export const rootReducer = combineReducers({
  popup: popupReducer,
  movieList: movieReducer,
  cinema: cinemaReducer,
  auth: authReducer,
});


