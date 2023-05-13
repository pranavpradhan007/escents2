import React from 'react'
import { useEffect , useState } from 'react';

export default function Cart() {
  const [cart, setCart] = useState([]);

  const getCart = () => {
    const data = JSON.parse(localStorage.getItem("cart"));
    if (data) {
      console.log(data);
      setCart(data);
    }else{
      console.log("no data");
    }
  }

  useEffect(() => {
    getCart();
  }, []);

  return (
    <>
    <div
      className="container"
      style={{ position: "relative", top: "60px", height: 100 }}
    >
      <h1>
        <strong>Your Cart</strong>
      </h1>
      {cart.map((cart) => (
        <>
          <h2>{cart.name}</h2>
          <h2>{cart.quantity}</h2>
          <h2>{cart.price}</h2>
        </>
      ))} 
    </div>
  </>
  )
}
