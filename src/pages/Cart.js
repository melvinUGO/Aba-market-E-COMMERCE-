import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useGlobalcontext } from "../context";

import CartContainer from "../components/CartContainer";

export const Cart = () => {
  const { total } = useGlobalcontext();
  return (
    <section className="cart-section">
      <div className="cart-title">
        <Link to="/" className="btn">
          <FaArrowLeft />
        </Link>
        <h3>Aba Market</h3>
      </div>
      <div className="cart-container">
        <h3>your bag</h3>
        <CartContainer />
        <div className="cart-total">
          <h3>total</h3>
          <h3>{total}</h3>
        </div>
      </div>
    </section>
  );
};
