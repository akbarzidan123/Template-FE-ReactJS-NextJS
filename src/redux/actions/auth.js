// import LINK from "src/constants/urls";
// import AuthStorage from "src/utils/auth-storage";
// import { SINGLE_API } from "./types";
// import { notification } from "antd";

// const { API_URL, AUTH_URL } = LINK;

export const actionLoginTest = async (value = {}, next = (f) => f) => {
  //   let url = AUTH_URL + "/auth/login";
  //   if (process.env.NEXT_ENV === "production") url = AUTH_URL + "/auth/login";
  if (value != null) {
    console.log("benar", value);
    return {
      type: "LOGIN_SUCCESS",
      payload: value,
    };
  } else {
    console.log("salah");
    return {
      type: "LOGIN_FAILED",
      payload: value,
      message: "Oops!",
    };
  }
};

export const actionTokenLoginTest = async (value = {}, next = (f) => f) => {
  if (value != null) {
    console.log("benar");
    return {
      type: "LOGIN_SUCCESS",
      payload: value,
    };
  } else {
    console.log("salah");
    return {
      type: "LOGIN_FAILED",
      payload: value,
      message: "Oops!",
    };
  }
};

// export const actionLogin = async (payload = {}, next = (f) => f) => {
//   let url = AUTH_URL + "/auth/login";
//   if (process.env.NEXT_ENV === "production") url = AUTH_URL + "/auth/login";
//   return {
//     type: SINGLE_API,
//     payload: {
//       url,
//       options: { method: "POST" },
//       payload,
//       errorType: "LOGIN_FAILED",
//       successType: "LOGIN_SUCCESS",
//       next: async (err, response = {}) => {
//         if (!err) {
//           const { status } = response;
//           if (status && status.responseCode) {
//             if (process.browser) {
//               notification.error({
//                 message: "Oops!",
//                 description: status.responseDesc,
//               });
//             }
//           } else {
//             AuthStorage.value = response;
//           }
//         }
//         next(err, response);
//       },
//     },
//   };
// };

// export const actionTokenLogin = async (payload = {}, next = (f) => f) => {
//   let url = AUTH_URL + "/auth/login";
//   if (process.env.NEXT_ENV === "production") url = AUTH_URL + "/auth/login";
//   return {
//     type: SINGLE_API,
//     payload: {
//       url,
//       options: { method: "POST" },
//       payload,
//       errorType: "LOGIN_FAILED",
//       successType: "LOGIN_SUCCESS",
//       next: async (err, response = {}) => {
//         if (!err) {
//           const { status } = response;
//           if (status && status.responseCode) {
//             if (process.browser) {
//               notification.error({
//                 message: "Oops!",
//                 description: status.responseDesc,
//               });
//             }
//           } else {
//             AuthStorage.value = response;
//           }
//         }
//         next(err, response);
//       },
//     },
//   };
// };

// export const actionGetUserAuth = async (next = (f) => f) => {
//   let url = +"/users/" + AuthStorage.userId;
//   if (process.env.NEXT_ENV === "production") url = AUTH_URL + "/details";
//   return {
//     type: SINGLE_API,
//     payload: {
//       url: AUTH_URL + "/users/" + AuthStorage.userId,
//       successType: "GET_USER_AUTH_SUCCESS",
//       next,
//     },
//   };
// };

// export const actionUpdateProfile = async (payload = {}, next = (f) => f) => {
//   return {
//     type: SINGLE_API,
//     payload: {
//       url: AUTH_URL + "/users/" + AuthStorage.userId,
//       payload,
//       successType: "EDIT_PROFILE_SUCCESS",
//       options: {
//         method: "PATCH",
//       },
//       next,
//     },
//   };
// };

// export const actionLogout = (payload, next) => async (dispatch, getState) => {
//   AuthStorage.destroy();
//   return next();
// };

// export const actionForgotPassword = async (payload = {}, next = (f) => f) => {
//   return {
//     type: SINGLE_API,
//     payload: {
//       url: API_URL + "/users/reset",
//       payload,
//       options: { method: "POST" },
//       next,
//     },
//   };
// };

// export const actionResetPassword = async (payload = {}, next = (f) => f) => {
//   const { token, ...params } = payload;

//   return {
//     type: SINGLE_API,
//     payload: {
//       url: API_URL + "/users/reset-password?access_token=" + token,
//       payload: params,
//       options: { method: "POST" },
//       next,
//     },
//   };
// };

// export const actionChangePassword = async (payload = {}, next = (f) => f) => {
//   const { oldPassword, newPassword } = payload;

//   return {
//     type: SINGLE_API,
//     payload: {
//       url: API_URL + "/users/change-password",
//       payload: { oldPassword, newPassword },
//       options: { method: "POST" },
//       successType: "CHANGE_PASSWORD_SUCCESS",
//       next,
//     },
//   };
// };
