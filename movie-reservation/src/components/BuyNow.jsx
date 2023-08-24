import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Ereceipt from "./Ereceipt";
import "../styles/BuyNow.css";

const BuyNow = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false); // State to track confirmation

  const { totalUniqueItems, totalItems, cartTotal, selectedItems } =
    location.state;

  const randomId = function (length = 8) {
    return Math.random()
      .toString(36)
      .substring(2, length + 2)
      .toUpperCase();
  };

  const [reserveId, setReserveId] = useState(""); // State to store the Reserve Id

  useEffect(() => {
    // Generate the Reserve Id when the component mounts
    const generatedId = randomId();
    setReserveId(generatedId);
  }, []);

  const [formData, setFormData] = useState({
    date: "",
    fname: "",
    lname: "",
    contact: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.date) {
      errors.date = "Date is required";
    }

    if (!formData.fname) {
      errors.fname = "First name is required";
    }

    if (!formData.lname) {
      errors.lname = "Last name is required";
    }

    if (!formData.contact) {
      errors.contact = "Contact is required";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    return errors;
  };

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous location (Reserve component)
  };

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent form submission and page refresh
    setShowModal(true); // Show the confirmation modal
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setShowModal(true);
      setFormErrors({});
    } else {
      // If there are errors, update the state to display them
      setFormErrors(errors);
      setShowModal(false); // Don't open the modal if there are errors
    }
  };

  const handleConfirm = () => {
    // Handle the form submission logic here
    setShowModal(false); // Hide the modal after confirming
    setIsConfirmed(true);
    const queryString = `?reserveId=${reserveId}&date=${formData.date}&fname=${
      formData.fname
    }&lname=${formData.lname}&contact=${formData.contact}&email=${
      formData.email
    }&selectedItems=${JSON.stringify(
      selectedItems
    )}&totalUniqueItems=${totalUniqueItems}&totalItems=${totalItems}&cartTotal=${cartTotal}`;

    // Navigate to the EReceipt component with query parameters
    navigate(`/ereceipt${queryString}`);
  };

  const handleCancel = () => {
    setShowModal(false); // Hide the modal after canceling
  };
  return (
    <div className="buy-container">
      <form className="buy-form" onSubmit={handleFormSubmit}>
        <div className="personal-info">
          <h2>Personal Information</h2>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
          />
          {formErrors.date && <div className="error">{formErrors.date}</div>}
          <label htmlFor="fname">First name:</label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={formData.fname}
            onChange={handleInputChange}
          />
          {formErrors.fname && <div className="error">{formErrors.fname}</div>}
          <label htmlFor="lname">Last name:</label>
          <input
            type="text"
            id="lname"
            name="lname"
            value={formData.lname}
            onChange={handleInputChange}
          />
          {formErrors.lname && <div className="error">{formErrors.lname}</div>}
          <label htmlFor="contact">Contact:</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
          />
          {formErrors.contact && (
            <div className="error">{formErrors.contact}</div>
          )}
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {formErrors.email && <div className="error">{formErrors.email}</div>}
        </div>
        <div className="reserved-movies">
          <h4>Reserved Movies</h4>
          <ul>
            {selectedItems.map((item, index) => (
              <li key={index} className="movie-list">
                <span>Title: {item.title}</span>
                <span>Quantity: {item.quantity}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="reserve-info">
          <h4>Reserve Information</h4>
          <label htmlFor="reserveId">Reserve Id:</label>
          <input
            type="text"
            id="reserveId"
            name="reserveId"
            value={reserveId}
            disabled
          />
          <label htmlFor="reserve">Total number of reserve movies:</label>
          <input
            type="text"
            id="reserve"
            name="reserve"
            value={totalUniqueItems}
            disabled
          />
          <label htmlFor="quantity">total ticket quantity:</label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={totalItems}
            disabled
          />
          <label htmlFor="price">Total price PHP:</label>
          <input
            type="text"
            id="price"
            name="price"
            value={cartTotal}
            disabled
          />
        </div>
        <div className="btn-container">
          <button className="back-btn" onClick={handleGoBack}>
            Back to Reserve
          </button>
          <input className="submit-btn" type="submit" value="Submit" />
        </div>
      </form>
      {/* Confirmation Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Confirm Purchase</h2>
            <p>Are you sure you want to proceed with the purchase?</p>
            <div className="modal-buttons">
              <button onClick={handleConfirm}>Confirm</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </div>
      )}
      {/* Redirect to EReceipt */}
      {isConfirmed && <Ereceipt reserveId={reserveId} />}
    </div>
  );
};

export default BuyNow;
