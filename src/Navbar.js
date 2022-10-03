import React from "react";
import { FaHome, FaSearch, FaShoppingCart } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { useGlobalcontext } from "./context";

const Navbar = () => {
  const { amount } = useGlobalcontext();
  return (
    <section className="navbar-container">
      <div className="navbar">
        <button className="nav-btn">
          <div>
            <FaHome />
          </div>
          Home
        </button>
        <button className="nav-btn">
          <div>
            <FaSearch />
          </div>
          Search
        </button>
        <button className="nav-btn">
          <div>
            <FaShoppingCart />
          </div>
          Cart
          <span>{amount}</span>
        </button>
        <button className="nav-btn">
          <div>
            <BsPerson />
          </div>
          Me
        </button>
      </div>
    </section>
  );
};

export default Navbar;
