import { SIGN_IN, SIGN_UP } from "../const/authConst";

const initialState = {
  authSignIn: {},
  authSignUp: {},
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_IN: {
      state.authSignIn = payload;
      return { ...state };
    }
    case SIGN_UP: {
      state.authSignUp = payload;
      return {...state};
    }
    default:
      return { ...state };
  }
};
