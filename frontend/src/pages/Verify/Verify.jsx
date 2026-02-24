import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { StoreContext } from "../../Context/StoreContext";
import "./Verify.css";
const Verify = () => {
  const { token } = useContext(StoreContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const verifyPayment = async () => {
    try {
      const data = { success: success, orderId: orderId };
      const response = await axios.post(
        "http://localhost:4000/api/order/verify",
        data,
        { headers: { token } },
      );

      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/myorder");
      } else {
        toast.error(response.data.message);
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    verifyPayment();
  }, []);
  return (
    <>
      <div className="verify">
        <div className="spinner"></div>
      </div>
    </>
  );
};

export default Verify;
