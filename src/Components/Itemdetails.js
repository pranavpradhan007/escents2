import React, { useState } from "react";
import Scaffold from "./Scaffold";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function Itemdetails() {

  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrementCount = () => {
    setCount(prevCount => prevCount - 1);
  };

  const { id } = useParams();
  console.log(id);
  
  //fecthing data from backend and filtering it based on id
  // create an object to store the filtered data
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
      console.log(data);
      //store the filtered data inside an object
      setItem(data[0]);
      console.log(item);
    } 
    catch (err) {
      console.log(err);
    }
  };

  const handleCart = () => {
    // add an array to the local storage
    // if the array is empty, add the item to the array
    // if the array is not empty, check if the item is already present in the array
    // if the item is present, increment the quantity
    // if the item is not present, add the item to the array

    // create an object to store the item
    const itemObj = {
      id: item._id,
      name: item.productName,
      price: 348.00,
      quantity: count,
    };    

    // check if the array is empty)
    if (cart.length === 0) {
      // add the item to the array
      setCart([...cart, itemObj]);
      // store the array in the local storage
      localStorage.setItem("cart", JSON.stringify([...cart, itemObj]));
    }
    else {
      // check if the item is already present in the array
      const index = cart.findIndex((obj) => obj.id === item._id);
      if (index === -1) {
        // add the item to the array
        setCart([...cart, itemObj]);
        // store the array in the local storage
        localStorage.setItem("cart", JSON.stringify([...cart, itemObj]));
      }
      else {
        // increment the quantity of the item
        cart[index].quantity += count;
        // store the array in the local storage
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    }
  }


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
        <label className="my-4 mx-3 " style={{ opacity: 0.8, fontSize: 15 }}>
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
          <button
            onClick={handleCart}
          className=" mx-3 " >
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
  )
}
