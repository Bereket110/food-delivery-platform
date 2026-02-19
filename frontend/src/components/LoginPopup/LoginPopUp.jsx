import React, { useState } from "react";
import "./LoginPopUp.css";
import { assets } from "../../assets/frontend_assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
const LoginPopUp = ({ setLoginPopUp }) => {
  const { url, token, setToken } = useContext(StoreContext);
  const [currentState, setCurrentState] = useState("Sign Up");

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    let endpoint;
    try {
      if (currentState == "Sign Up") {
        endpoint = ` ${url}/api/user/register`;
      } else {
        endpoint = ` ${url}/api/user/login`;
      }

      let response = await axios.post(endpoint, data, {});
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        toast.success(response.data.message);
        setLoginPopUp(false);
        console.log(token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Something wrong");
      console.log(error.message);
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
              value={data.name}
              placeholder="your name"
              onChange={(e) => onChangeHandler(e)}
              name="name"
            />
          )}
          <input
            type="email"
            name="email"
            value={data.email}
            placeholder="Email"
            onChange={(e) => onChangeHandler(e)}
          />{" "}
          <input
            type="password"
            placeholder="Password"
            value={data.password}
            name="password"
            onChange={(e) => onChangeHandler(e)}
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
