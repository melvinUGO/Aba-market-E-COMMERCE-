import React, { useContext, useEffect, useReducer } from "react";
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

  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
    console.log(state);
  };

  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const handleTotal = () => {
    dispatch({ type: "TOTAL" });
  };

  useEffect(() => {
    handleTotal();
  }, [state.amount]);

  return (
    <AppContext.Provider
      value={{ ...state, handleFilter, filterBtns, increase, decrease, remove }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalcontext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
