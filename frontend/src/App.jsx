import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopUp from "./components/LoginPopup/LoginPopUp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Verify from "./pages/Verify/Verify";
import MyOrder from "./pages/MyOrder/MyOrder";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Services from "./pages/Services/Services";
const App = () => {
  const [loginPopUp, setLoginPopUp] = useState(false);
  return (
    <>
      <ToastContainer />
      {loginPopUp ? <LoginPopUp setLoginPopUp={setLoginPopUp} /> : <></>}
      <div className="app">
        <Navbar setLoginPopUp={setLoginPopUp} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/place-order"
            element={<PlaceOrder setLoginPopUp={setLoginPopUp} />}
          />
          <Route
            path="/verify"
            element={<Verify setLoginPopUp={setLoginPopUp} />}
          />
          <Route
            path="/myorder"
            element={<MyOrder setLoginPopUp={setLoginPopUp} />}
          />
          <Route
            path="/about-us"
            element={<About setLoginPopUp={setLoginPopUp} />}
          />
          <Route
            path="/services"
            element={<Services setLoginPopUp={setLoginPopUp} />}
          />
          <Route
            path="/contact-us"
            element={<Contact setLoginPopUp={setLoginPopUp} />}
          />
        </Routes>
      </div>
      <Footer />
      <div className="call-btn">Call</div>
    </>
  );
};

export default App;
