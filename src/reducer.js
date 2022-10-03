import React from "react";
import { data } from "./data";

const reducer = (state, action) => {
  if (action.type === "FILTER") {
    if (action.payload === "All") {
      return { ...state, cart: data };
    }
    return {
      ...state,
      cart: data.filter((item) => item.category === action.payload),
    };
  }

  if (action.type === "ADD_TO_CART") {
    const temp = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return { ...state, cart: temp, amount: state.amount + 1 };
  }

  return state;
};

export default reducer;
