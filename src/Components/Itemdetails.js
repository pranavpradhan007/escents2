import React, { useState } from "react";
import Scaffold from "./Scaffold";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Itemdetails() {
  const [count, setCount] = useState(0);
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

   // handle razorpay payment

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

  const getProduct = async () => {
    try {
      const response = await fetch(`http://localhost:5000/item/${id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      setItem(data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };

  const handleCart = () => {
    const itemObj = {
      id: item._id,
      name: item.productName,
      price: 348.0,
      quantity: count,
    };

    if (cart.length === 0) {
      setCart([...cart, itemObj]);
      localStorage.setItem("cart", JSON.stringify([...cart, itemObj]));
    } else {
      const index = cart.findIndex(obj => obj.id === item._id);
      if (index === -1) {
        setCart([...cart, itemObj]);
        localStorage.setItem("cart", JSON.stringify([...cart, itemObj]));
      } else {
        cart[index].quantity += count;
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    }
    alert("Item added to cart!");
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <Scaffold
        title={item.productName}
        productImage1={item.productImage1}
        productImage2={item.productImage2}
        productImage3={item.productImage3}
        intensity={item.intensity}
        description={item.description}
        accordsImage={item.accordsImage}
        notesImage={item.notesImage}
      />

      <div className="container col-3 mx-auto">
        <h5 className="col-4 mx-auto" style={{ opacity: 0.88 }}>
          <strong>Rs.348.00</strong>
        </h5>
        <label className="my-4 mx-3" style={{ opacity: 0.8, fontSize: 15 }}>
          Quantity
        </label>
        <div className="btn-group">
          <button
            className="btn btn-outline-secondary"
            onClick={decrementCount}
          >
            -
          </button>
          <button className="btn btn-outline-secondary">{count}</button>
          <button
            className="btn btn-outline-secondary"
            onClick={incrementCount}
          >
            +
          </button>
          <button onClick={handleCart} className="mx-3">
            Add to cart
          </button>
        </div>
      </div>

      <div className="container my-4">
        <div className="d-grid gap-2 col-6 mx-auto">
          <button 
            onClick={() => displayRazorpay()}
            type="button" className="btn btn-dark btn-lg">
            Buy it Now
          </button>
        </div>
        </div>

<div
  style={{
    backgroundColor: "black",
    color: "white",
    textAlign: "justify",
    marginBottom: 0,
    paddingBottom: 0,
    height: 55,
  }}
>
  <p
    className="my-3"
    style={{
      opacity: 0.8,
      fontSize: 12,
      marginBottom: 0,
      paddingBottom: 0,
    }}
  >
    © 2023, escents.in |
    <ul
      className="list-inline my-3"
      style={{ display: "inline", margin: 0, padding: 0 }}
    >
      <li className="list-inline-item">
        <a href="#">Privacy Policy</a>
      </li>
      <li className="list-inline-item">|</li>
      <li className="list-inline-item">
        <a href="#">Terms of Service</a>
      </li>
      <li className="list-inline-item">|</li>
      <li className="list-inline-item">
        <a href="#">Refund Policy</a>
      </li>
    </ul>
  </p>
</div>
</>
);
}
