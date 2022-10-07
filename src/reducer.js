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

  if (action.type === "INCREASE") {
    const temp = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return { ...state, cart: temp, amount: state.amount + 1 };
  }

  if (action.type === "DECREASE") {
    const temp = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount - 1 };
      }
      return item;
    });
    return { ...state, cart: temp, amount: state.amount - 1 };
  }

  if (action.type === "TOTAL") {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const newTotal = price * amount;
        cartTotal.total += newTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      { total: 0, amount: 0 }
    );
    return { ...state, total, amount };
  }

  if (action.type === "REMOVE") {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    };
  }

  throw new Error("no matching action type");
};

export default reducer;
