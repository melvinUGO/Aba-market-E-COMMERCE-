import React, { useContext, useReducer } from "react";
import { data } from "./data";
import reducer from "./reducer";

const AppContext = React.createContext();
const currentState = {
  cart: data,
  amount: 0,
  total: 0,
};

const AppProvider = ({ children }) => {
  const filterBtns = ["All", ...new Set(data.map((item) => item.category))];
  const [state, dispatch] = useReducer(reducer, currentState);

  const handleFilter = (category) => {
    dispatch({ type: "FILTER", payload: category });
  };

  const addToCart = (id) => {
    dispatch({ type: "ADD_TO_CART", payload: id });
    console.log(state);
  };

  return (
    <AppContext.Provider
      value={{ ...state, handleFilter, filterBtns, addToCart }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalcontext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
