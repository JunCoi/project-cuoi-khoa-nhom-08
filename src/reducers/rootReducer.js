import { combineReducers } from 'redux';
import popupReducer from './popupReducer';

const rootReducer = combineReducers({
  popup: popupReducer,
});

export default rootReducer;
