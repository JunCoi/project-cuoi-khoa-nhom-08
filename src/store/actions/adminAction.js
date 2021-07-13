import axios from "axios";
import {
  ADD_NEW_USER,
  DELETE_USER,
  GET_LIST_SEARCH_USER_PAGE,
  GET_LIST_USER_PAGE,
  UPDATE_USER,
} from "../const/adminConst";

export const getListUserPageAction = (maNhom, soTrang, soPhanTuTrenTrang) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=${maNhom}&soTrang=${soTrang}&soPhanTuTrenTrang=${soPhanTuTrenTrang}`,
        method: "GET",
      });
      //   console.log(res.data);
      dispatch({
        type: GET_LIST_USER_PAGE,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteUserAction = (
  tuKhoa,
  taiKhoan,
  maNhom,
  soTrang,
  soPhanTuTrenTrang
) => {
  return async (dispatch) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const res = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
        method: "DELETE",
        data: taiKhoan,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data);
      dispatch({
        type: DELETE_USER,
        payload: taiKhoan,
      });
      dispatch(await getListUserPageAction(maNhom, soTrang, soPhanTuTrenTrang));
      dispatch(
        await getListSearchUserPageAction(
          tuKhoa,
          maNhom,
          soTrang,
          soPhanTuTrenTrang
        )
      );
    } catch (error) {
      alert(error.response.data);
      console.log(error);
    }
  };
};

export const updateUserAction = (user, index, tuKhoa) => {
  return async (dispatch) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const res = await axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
        method: "PUT",
        data: user,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({
        type: UPDATE_USER,
        payload: [res.data, index, tuKhoa],
      });
      alert("cập nhật tài khoản thành công");
    } catch (error) {
      alert(error.response.data);
      console.log(error.response.data);
    }
  };
};

export const getListSearchUserPageAction = (
  tuKhoa,
  maNhom,
  soTrang,
  soPhanTuTrenTrang
) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "GET",
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDungPhanTrang?MaNhom=${maNhom}&tuKhoa=${tuKhoa}&soTrang=${soTrang}&soPhanTuTrenTrang=${soPhanTuTrenTrang}`,
        data: "",
      });
      //   console.log("data" ,res.data);
      dispatch({
        type: GET_LIST_SEARCH_USER_PAGE,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addNewUserAction = (user) => {
  return async (dispatch) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const res = await axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
        method: "POST",
        data: user,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("thêm người dùng thành công");
      // console.log(res.data);
      dispatch({
        type: ADD_NEW_USER,
        payload: res.data,
      });
    } catch (error) {
      alert(error.response.data);
      console.log(error);
    }
  };
};
