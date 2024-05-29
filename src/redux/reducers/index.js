import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import auth, { initialState as authInitial } from "./auth";
import data, { initialState as dataInitial } from "./data";
// import tagSearch, { initialState as tagSearchInitial } from "./search";

export const initialState = {
  auth: authInitial,
  data: dataInitial,
  // tagSearch: tagSearchInitial,
};

const appReducer = combineReducers({
  auth,
  data,
  // tagSearch,
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
