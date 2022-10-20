import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const auth = getAuth(app);
  const navigate = useNavigate();
  const handleChange = (event) => {
    let input = { [event.target.name]: event.target.value };
    setData({ ...data, ...input });
  };
  const handleClick = (event) => {
    event.preventDefault();

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((response) => {
        console.log(response);
      })
      .then(() => navigate("/Log in"))
      .catch((error) => {
        console.log(error);
        alert("Something went wrong :(");
      });
  };
  return (
    <section className="me">
      <div>
        <h3>Create Account</h3>
        <img
          src="https://dearsystems.com.cn/wp-content/uploads/2019/12/ecommerce.svg"
          alt="ecommerce svg"
        />
      </div>
      <div>
        <div className="me-text">
          <h3>Aba Market</h3>
          <p>WE BELIEVE STYLE SHOULDN'T BREAK THE BANK.</p>
        </div>
        {/* form */}
        <form className="form">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={(event) => handleChange(event)}
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(event) => handleChange(event)}
          />
          <button className="login-btn" onClick={handleClick}>
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
};

export default Signup;
