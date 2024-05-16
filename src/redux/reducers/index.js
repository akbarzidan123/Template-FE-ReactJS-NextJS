import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import auth, { initialState as authInitial } from "./auth";

export const initialState = {
  auth: authInitial,
};

const appReducer = combineReducers({
  auth,
});

const reducers = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
  }
  return appReducer(
    action.type === "LOGOUT_SUCCESS" ? initialState : state,
    action
  );
};

export default reducers;
