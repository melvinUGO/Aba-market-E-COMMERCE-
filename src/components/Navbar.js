import React from "react";
import { FaHome, FaSearch, FaShoppingCart } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { useGlobalcontext } from "../context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { amount } = useGlobalcontext();
  return (
    <section className="navbar-container">
      <div className="navbar">
        <button className="nav-btn">
          <Link to="/" className="btn">
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
          <Link to="/cart" className="btn">
            <div>
              <FaShoppingCart />
            </div>
            Cart
            <span>{amount}</span>
          </Link>
        </button>
        <button className="nav-btn">
          <Link to="/Dashboard" className="btn">
            <div>
              <BsFillPersonFill />
            </div>
            Me
          </Link>
        </button>
      </div>
    </section>
  );
};

export default Navbar;
