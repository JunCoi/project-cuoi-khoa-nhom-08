import {
  ADD_NEW_USER,
  DELETE_USER,
  GET_LIST_SEARCH_USER_PAGE,
  GET_LIST_USER_PAGE,
  UPDATE_USER,
} from "../const/adminConst";

const initialState = {
  listUser: [],
  listSearchUser: [],
};

export const adminReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_LIST_USER_PAGE: {
      state.listUser = payload;
      return { ...state };
    }
    case DELETE_USER: {
      const listUserDelete = [...state.listUser.items];
      const index = listUserDelete.findIndex(
        (userDelete) => userDelete.taiKhoan === payload
      );
      if (index !== -1) {
        listUserDelete.splice(index, 1);
        state.listUser.items = listUserDelete;
      }

      const listUserSearchDelete = [...state.listSearchUser.items];
      const indexSearchDelete = listUserSearchDelete.findIndex(
        (userSearchDelete) => userSearchDelete.taiKhoan === payload
      );
      if (indexSearchDelete !== -1) {
        listUserSearchDelete.splice(index, 1);
        state.listSearchUser.items = listUserSearchDelete;
      }
      return { ...state };
    }
    case UPDATE_USER: {
      const listUserUpdate = [...state.listUser.items];
      for (let i = 0; i < listUserUpdate.length; i++) {
        if (i === payload[1]) {
          listUserUpdate[i] = payload[0];
          listUserUpdate[i].soDt = payload[0].soDT;
          listUserUpdate[i].maLoaiNguoiDung = payload[0].loaiNguoiDung;
        }
      }
      state.listUser.items = listUserUpdate;
      if (payload[2] !== "") {
        const listUserSearchUpdate = [...state.listSearchUser.items];
        for (let i = 0; i < listUserSearchUpdate.length; i++) {
          if (i === payload[1]) {
            listUserSearchUpdate[i] = payload[0];
            listUserSearchUpdate[i].soDt = payload[0].soDT;
            listUserSearchUpdate[i].maLoaiNguoiDung = payload[0].loaiNguoiDung;
          }
        }
        state.listSearchUser.items = listUserSearchUpdate;
      }

      return { ...state };
    }
    case GET_LIST_SEARCH_USER_PAGE: {
      state.listSearchUser = payload;
      return { ...state };
    }
    case ADD_NEW_USER: {
      return {...state}
    }
    default:
      return { ...state };
  }
};
