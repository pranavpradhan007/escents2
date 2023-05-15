import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();
  function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}

  const displayRazorpay = async()=> {

    const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
    }

    // creating a new order
    const result = await fetch("/razorpay", {
        method: "POST",
    });

    const data = await result.json();
    if (!data) {
        alert("Server error. Are you online?");
        return;
    }

    // Getting the order details back
    const { amount, id: order_id, currency } = data;

    const options = {
        key: "rzp_test_regQ3Jwb1ZlLrU", // Enter the Key ID generated from the Dashboard
        amount: amount.toString(),
        currency: currency,
        name: "Escents",
        description: "Test Transaction",
        order_id: order_id,
        handler: async function (response) {
            const data = {
                orderCreationId: order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
            };

            const result = await fetch("/success", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const res = await result.json();
            alert("Payment successful");
            navigate("/");
        },
        prefill: {
            name: "Pranav",
            email: "pranav@gmail.com",
            contact: "9822790187",
        },
        notes: {
            address: "Escents , Pune",
        },
        theme: {
            color: "#61dafb",
        },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
}

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
            <button onClick={() => displayRazorpay()} type="submit" className="btn btn-secondary">
              Place Order
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
