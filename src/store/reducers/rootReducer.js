import { combineReducers } from 'redux';
import { movieReducer } from './movieReducer';
import { popupReducer } from './popupReducer';

export const rootReducer = combineReducers({
  popup: popupReducer,
  movieList: movieReducer,
});


