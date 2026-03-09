import React from "react";
import "./Report.css";
const Report = () => {
  return (
    <>
      <div className="report">
        <div className="report-header">
          <div className="header-items-container">
            <div className="header-item">
              <p>Total Users</p>
              <p>20</p>
            </div>
            <div className="header-item">
              <p>Total Delivered Orders</p>
              <p>40</p>
            </div>
            <div className="header-item">
              <p>Orders On Delivered</p>
              <p>30</p>
            </div>
            <div className="header-item">
              <p>Food On Processing</p>
              <p>30</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Report;
