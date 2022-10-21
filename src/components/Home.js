import React, { useRef } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalcontext } from "../context";
import ProductsContainer from "./ProductsContainer";

const Home = () => {
  const { filterBtns, handleFilter } = useGlobalcontext();
  const container = useRef(null);

  return (
    <section className="home">
      <header>
        <h3>Aba Market</h3>
        <Link to="/me" className="header-btn">
          Sign in/Sign Up
        </Link>
      </header>
      {/* filter buttons */}
      <div className="filter-container">
        {filterBtns.map((btn, index) => {
          return (
            <button
              key={index}
              ref={container}
              onClick={(e) => handleFilter(e.target.textContent)}
            >
              {btn}
            </button>
          );
        })}
      </div>
      {/* cart container*/}
      <ProductsContainer />
    </section>
  );
};

export default Home;
