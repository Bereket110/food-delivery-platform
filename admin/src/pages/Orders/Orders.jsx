import React from "react";
import "./Order.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { assets } from "../../../../frontend/src/assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Orders = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const fetchOrdersData = async () => {
    const response = await axios.post(
      "http://localhost:4000/api/order/list",
      {},
    );
    setData(response.data.orders);
  };
  const updateStatus = async (e, id) => {
    try {
      const status = e.target.value;
      const orderId = id;
      const data = { status, orderId };
      console.log(data);
      const response = await axios.post(
        "http://localhost:4000/api/order/status-update",
        data,
      );
      if (response.data.success) {
        fetchOrdersData();
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Something wrong");
    }
  };
  useEffect(() => {
    fetchOrdersData();
  }, []);
  return (
    <>
      <div className="order add">
        <h1>Order</h1>
        <div className="order-list">
          {data.map((order, index) => {
            return (
              <div key={index} className="order-item">
                <img src={assets.parcel_icon} alt="" />
                <div>
                  <p className="order-item-food">
                    {order.items.map((item, index) => {
                      if (index == order.items.length - 1) {
                        return item.name + " x " + item.quantity;
                      } else {
                        return item.name + " x " + item.quantity + " , ";
                      }
                    })}
                  </p>
                  <p className="order-item-name">
                    Name: {order.address.firstName} {order.address.lastName}
                  </p>
                  <div className="order-item-address">
                    <p> {order.address.street + ","}</p>
                    <p>
                      {order.address.city +
                        ", " +
                        order.address.state +
                        ", " +
                        order.address.country +
                        ", " +
                        order.address.zipCode}
                    </p>
                  </div>
                  <p className="order-item-phone">{order.address.phone}</p>
                </div>
                <p>Items: {order.items.length}</p>
                <p>{order.amount}Birr</p>
                <select
                  name=""
                  value={order.status}
                  onChange={(e) => updateStatus(e, order._id)}
                >
                  <option value="Food Processing">Food Processing</option>
                  <option value="Out for Delivery">On Delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Orders;
