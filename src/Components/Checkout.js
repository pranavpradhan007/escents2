import React, { useState } from "react";

export default function Checkout() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!name || !address || !contactNumber) {
      alert("Please fill in all required fields.");
      return;
    }

    // Validate contact number length
    if (contactNumber.length !== 10) {
      alert("Contact number should be 10 digits long.");
      return;
    }

    // Process form submission
    // You can add your logic here, e.g., send the form data to a server

    // Clear form fields and mark form as submitted
    setName("");
    setAddress("");
    setContactNumber("");
    setFormSubmitted(true);
  };

  return (
    <div className="container" style={{ position: "relative", top: "60px", height: 100 }}>
      <div className="container mt-4">
        <h1><strong>Checkout</strong></h1>
        {formSubmitted ? (
          <div className="alert alert-success" role="alert">
            Thank you for your order! The Payment Method page will load now!
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="contactNumber" className="form-label">
                Contact Number <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="contactNumber"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                inputMode="numeric"
                pattern="[0-9]{10}"
                required
              />
            </div>
            <button type="submit" className="btn btn-secondary">
              Place Order
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
