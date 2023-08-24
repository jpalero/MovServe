import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import QRCode from "qrcode.react";
import "../styles/Ereceipt.css";

const Ereceipt = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const reserveId = queryParams.get("reserveId");

  // Example data, replace with actual data sources
  const formData = {
    date: queryParams.get("date"),
    fname: queryParams.get("fname"),
    lname: queryParams.get("lname"),
    contact: queryParams.get("contact"),
    email: queryParams.get("email"),
  };

  const selectedItems = JSON.parse(queryParams.get("selectedItems")); // If you pass JSON-encoded array as query parameter
  const totalUniqueItems = queryParams.get("totalUniqueItems");
  const totalItems = queryParams.get("totalItems");
  const cartTotal = queryParams.get("cartTotal");

  const handleDone = () => {
    // Redirect to home page
    navigate("/");
  };

  return (
    <section className="ereceipt-page">
      <div className="ereceipt-container">
        <h2>Electronic Receipt</h2>
        <p>
          Reserve ID: <b>{reserveId}</b>
        </p>

        <h3>Reserved Movies</h3>
        <ul>
          {selectedItems.map((item, index) => (
            <li key={index}>
              <span>Title: {item.title}</span>
              <span>Quantity: {item.quantity}</span>
            </li>
          ))}
        </ul>
        {/* Display other receipt details */}
        <div className="receipt-details">
          <p>Date: {formData.date}</p>
          <p>First Name: {formData.fname}</p>
          <p>Last Name: {formData.lname}</p>
          <p>Contact: {formData.contact}</p>
          <p>Email: {formData.email}</p>

          <p>Total Reserved Movies: {totalUniqueItems}</p>
          <p>Total Ticket Quantity: {totalItems}</p>
          <p>Total Price: {cartTotal} PHP </p>
        </div>

        <div className="qr-code">
          <QRCode value={reserveId} />
        </div>

        <button className="done-btn" onClick={handleDone}>
          Done
        </button>
      </div>
    </section>
  );
};

export default Ereceipt;
