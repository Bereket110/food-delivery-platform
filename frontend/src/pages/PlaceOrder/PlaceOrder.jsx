import { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../Context/StoreContext";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const PlaceOrder = ({ setLoginPopUp }) => {
  const { getTotalAmount } = useContext(StoreContext);
  const navigate = useNavigate();
  let totalFee = getTotalAmount();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    country: "",
    phone: "",
    zipCode: "",
  });
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put("http://localhost:4000/api/order", data);
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/");
      } else {
        toast.error(response.data.message);
        navigate("/");
        setLoginPopUp(true);
      }
    } catch (error) {
      // toast.error("Something wrong");
      toast.error(error.message);
      console.log(error.message);
    }
  };
  return (
    <form className="place-order" onSubmit={submitHandler}>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input
            type="text"
            onChange={onChangeHandler}
            value={data.firstName}
            name="firstName"
            placeholder="First name"
          />
          <input
            type="text"
            onChange={onChangeHandler}
            value={data.lastName}
            name="lastName"
            placeholder="Last name"
          />
        </div>
        <input
          type="email"
          onChange={onChangeHandler}
          value={data.email}
          name="email"
          placeholder="Email address"
        />
        <input
          type="text"
          onChange={onChangeHandler}
          value={data.street}
          name="street"
          placeholder="Street"
        />
        <div className="multi-fields">
          <input
            type="text"
            onChange={onChangeHandler}
            value={data.city}
            name="city"
            placeholder="City"
          />
          <input
            type="text"
            onChange={onChangeHandler}
            value={data.state}
            name="state"
            placeholder="State"
          />
        </div>
        <div className="multi-fields">
          <input
            type="text"
            onChange={onChangeHandler}
            value={data.zipCode}
            name="zipCode"
            placeholder="Zip code"
          />
          <input
            type="text"
            onChange={onChangeHandler}
            value={data.country}
            name="country"
            placeholder="Country"
          />
        </div>
        <input
          type="text"
          onChange={onChangeHandler}
          value={data.phone}
          name="phone"
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
