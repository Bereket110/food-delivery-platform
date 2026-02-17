import React, { useState } from "react";
import "./LoginPopUp.css";
import { assets } from "../../assets/frontend_assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
//  http://localhost:4000
const LoginPopUp = ({ setLoginPopUp }) => {
  const [currentState, setCurrentState] = useState("Sign Up");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      let formData = { name, email, password };

      let response = await axios.post(
        " http://localhost:4000/auth/user/register",
        formData,
        {},
      );
      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setEmail("");
        setPassword("");
      } else {
        toast.error(response.data.message);
        setName("");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={onSubmitHandler}>
        <div className="login-popup-title">
          <h2>{currentState === "Sign Up" ? "Sign Up" : "Login"}</h2>
          <img
            onClick={() => setLoginPopUp(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currentState === "Sign Up" && (
            <input
              type="text"
              value={name}
              placeholder="your name"
              onChange={(e) => setName(e.target.value)}
              name="name"
            />
          )}
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          <input
            type="password"
            placeholder="Password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
        </div>
        <button type="submit" className="login-popup-button">
          {currentState === "Sign Up" ? "Create Account" : "Login"}
        </button>{" "}
        <div className="login-popup-condition">
          <input type="checkbox" />
          <p>
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
        {currentState === "Sign Up" ? (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrentState("Login")}>Login here</span>
          </p>
        ) : (
          <p>
            Create new account{" "}
            <span onClick={() => setCurrentState("Sign Up")}>Click here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;
