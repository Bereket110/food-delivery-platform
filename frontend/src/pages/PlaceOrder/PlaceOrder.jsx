import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../Context/StoreContext";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const PlaceOrder = () => {
  const { getTotalAmount } = useContext(StoreContext);
  let totalFee = getTotalAmount();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [zipCode, setZipCode] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      let data = {
        totalFee,
        firstName,
        lastName,
        email,
        street,
        city,
        state,
        country,
        phone,
        zipCode,
      };
      const response = await axios.post(
        "http://localhost:4000/api/order",
        data,
        {},
      );
      if (response.data.success) {
        setCity("");
        setCountry("");
        setEmail("");
        setFirstName("");
        setLastName("");
        setPhone("");
        setState("");
        setStreet("");
        setZipCode("");
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <form className="place-order" onSubmit={submitHandler}>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            placeholder="First name"
          />
          <input
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            placeholder="Last name"
          />
        </div>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email address"
        />
        <input
          type="text"
          onChange={(e) => setStreet(e.target.value)}
          value={street}
          placeholder="Street"
        />
        <div className="multi-fields">
          <input
            type="text"
            onChange={(e) => setCity(e.target.value)}
            value={city}
            placeholder="City"
          />
          <input
            type="text"
            onChange={(e) => setState(e.target.value)}
            value={state}
            placeholder="State"
          />
        </div>
        <div className="multi-fields">
          <input
            type="text"
            onChange={(e) => setZipCode(e.target.value)}
            value={zipCode}
            placeholder="Zip code"
          />
          <input
            type="text"
            onChange={(e) => setCountry(e.target.value)}
            value={country}
            placeholder="Country"
          />
        </div>
        <input
          type="text"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          placeholder="Phone number"
        />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalAmount()}Birr</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{getTotalAmount() === 0 ? 0 : 2}Birr</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>{getTotalAmount() === 0 ? 0 : getTotalAmount() + 2}Birr</p>
            </div>
          </div>
          <button type="submit">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
