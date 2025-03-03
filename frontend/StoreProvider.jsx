import React, { createContext, useReducer } from "react";

export const Store = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        userLoggedIn: action.payload,
      };
    case "LOG_OUT":
      return {
        ...state,
        userLoggedIn: null,
      };

    case "GET_CREATED_PLACE_DETAIL":
      return {
        ...state,
        placeInfo: action.payload,
      };

    default:
      return state;
  }
};

const initialState = {
  userLoggedIn: localStorage.getItem("userLoggedIn")
    ? JSON.parse(localStorage.getItem("userLoggedIn"))
    : null,
  placeInfo: localStorage.getItem("placeInfo")
    ? JSON.parse(localStorage.getItem("placeInfo"))
    : null,
};

function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{children}</Store.Provider>;
}

export default StoreProvider;
