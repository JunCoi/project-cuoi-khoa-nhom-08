const initialState = {
  isOpen: false,
  link: '',
};

const popupReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_POPUP': {
      state = action.payload;
      return state;
      break;
    }
    case 'CLOSE_POPUP': {
      state = action.payload;
      return state;
      break;
    }
    default:
      return state;
  }
};

export default popupReducer;
