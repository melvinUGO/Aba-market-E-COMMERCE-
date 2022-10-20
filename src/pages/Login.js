import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useGlobalcontext } from "../context";

const Login = () => {
  const { setUser } = useGlobalcontext();
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

    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((response) => {
        console.log(response);
      })
      .then(() => navigate("/Dashboard"))
      .catch((error) => {
        console.log(error);
        alert("Something went wrong :(");
      });
  };
  return (
    <section className="me">
      <div>
        <h3>Welcome Back</h3>
        <img
          src="https://cdn.myoperator.com/img/case-study/ecommerce/ecommerce.svg"
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
            type="text"
            name="name"
            placeholder="Name"
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
          <br />
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
            Log In
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
