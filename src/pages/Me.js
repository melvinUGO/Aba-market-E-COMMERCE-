import React from "react";
import { Link } from "react-router-dom";

const Me = () => {
  return (
    <section className="me form">
      <img
        src="https://dearsystems.com.cn/wp-content/uploads/2019/12/ecommerce.svg"
        alt="ecommerce svg"
      />
      <div>
        <div className="me-text">
          <h3>Aba Market</h3>
          <p>WE BELIEVE STYLE SHOULDN'T BREAK THE BANK.</p>
        </div>
        <div className="me-btns">
          <Link to="/log in" className="login-btn">
            Log in
          </Link>
          <Link to="/Sign up" className="signup-btn">
            Sign Up
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Me;
