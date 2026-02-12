import React, { useState } from "react";
import "./LoginPopUp.css";
import { assets } from "../../assets/frontend_assets/assets";

const LoginPopUp = ({ setLoginPopUp }) => {
  const [currentState, setCurrentState] = useState("Sign Up");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
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
            <input type="text" placeholder="your name" />
          )}
          <input type="email" placeholder="Email" />{" "}
          <input type="password" placeholder="Password" />{" "}
        </div>
        <button className="login-popup-button">
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
