import React, { useState } from "react";
import Scaffold from "./Scaffold";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function Itemdetails() {
  const [count, setCount] = useState(0);
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const [cart, setCart] = useState([]);

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
          <button type="button" className="btn btn-dark btn-lg">
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
