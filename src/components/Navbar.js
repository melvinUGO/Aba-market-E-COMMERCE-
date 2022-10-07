import React from "react";
import { FaHome, FaSearch, FaShoppingCart } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { useGlobalcontext } from "../context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { amount } = useGlobalcontext();
  return (
    <section className="navbar-container">
      <div className="navbar">
        <button className="nav-btn">
          <Link to="/">
            <div>
              <FaHome />
            </div>
            Home
          </Link>
        </button>
        <button className="nav-btn">
          <div>
            <FaSearch />
          </div>
          Search
        </button>
        <button className="nav-btn">
          <Link to="/cart">
            <div>
              <FaShoppingCart />
            </div>
            Cart
            <span>{amount}</span>
          </Link>
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
