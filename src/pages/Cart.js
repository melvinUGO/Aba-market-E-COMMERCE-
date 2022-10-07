import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useGlobalcontext } from "../context";

export const Cart = () => {
  const { cart } = useGlobalcontext();
  return (
    <section className="cart-section">
      <div className="cart-title">
        <Link to="/">
          <FaArrowLeft />
        </Link>
        <h1>Aba Market</h1>
      </div>
      <div className="cart-container"></div>
    </section>
  );
};
