import { combineReducers } from 'redux';
import { popupReducer } from './popupReducer';

export const rootReducer = combineReducers({
  popup: popupReducer,
});


