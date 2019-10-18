import React from "react";

export const initialState = {
  theme: "dark"
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "changeTheme":
      return {
        ...state,
        theme: action.newTheme
      };

    default:
      return state;
  }
};
