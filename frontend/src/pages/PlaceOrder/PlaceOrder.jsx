import { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../Context/StoreContext";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const PlaceOrder = ({ setLoginPopUp }) => {
  const { getTotalAmount, food_list, cartItems, token } =
    useContext(StoreContext);

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
    items: cartItems,
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const orderItems = [];

      for (let item in cartItems) {
        const itemInfo = food_list.find(
          (singleItem) => singleItem._id === item,
        );
        itemInfo["quantity"] = cartItems[item];
        orderItems.push(itemInfo);
      }
      const orderData = {
        address: data,
        items: orderItems,
        amount: getTotalAmount() + 2,
      };
      const response = await axios.post(
        "http://localhost:4000/api/order/place",
        orderData,
        {
          headers: {
            token,
          },
        },
      );
      if (response.data.success) {
        const { session_url } = response.data;
        window.location.replace(session_url);
      } else {
        alert("Error");
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Something wrong");
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
