import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useState([]);

  const getCart = () => {
    const data = JSON.parse(localStorage.getItem("cart"));
    if (data) {
      const updatedCart = data.map((item) => {
        return {
          ...item,
          totalPrice: item.price * item.quantity
        };
      });
      console.log(updatedCart);
      setCart(updatedCart);
    } else {
      console.log("no data");
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  return (
    <>
      <div className="container" style={{ position: "relative", top: "60px", height: 100 }}>
        <h1>
          <strong>Your Cart</strong>
        </h1>
        {cart.map((item) => (
          <div key={item.id} className="container my-4">
            <h3>
              <strong>Product Name: </strong>
            </h3>
            <h4>{item.name}</h4>
            <h3>
              <strong>Product Quantity: </strong>
            </h3>
            <h4>{item.quantity}</h4>
            <h3>
              <strong>Product Price: </strong>
            </h3>
            <h4>{item.totalPrice}/-</h4>
          </div>
        ))}
        {cart.length > 0 && (
          <div className="container my-4 d-flex justify-content-center">
            <button type="button" className="btn btn-outline-danger btn-lg me-3" onClick={clearCart}>
              Clear Cart
            </button>
            <Link to="/checkout">
              <button type="button" className="btn btn-dark btn-lg">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
