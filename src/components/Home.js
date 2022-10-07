import React, { useRef } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import { useGlobalcontext } from "../context";
import ProductsContainer from "./ProductsContainer";

const Home = () => {
  const { filterBtns, handleFilter } = useGlobalcontext();
  const container = useRef(null);

  return (
    <>
      <header>
        <button className="bars">
          <FaBars />
        </button>
        <h3>Aba Market</h3>
        <FaSearch />
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
    </>
  );
};

export default Home;
