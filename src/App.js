import "./App.css";
import NavBar from "./Components/NavBar";
import React, { Component } from "react";
import Products from "./Components/Products";
import Home from "./Components/Home";
import Feedback from "./Components/Feedback";
import Cart from "./Components/Cart";
import Itemdetails from "./Components/Itemdetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./Components/Loading";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <NavBar fixed="top" />
          <Routes>
            <Route exact path="/products" element={<Products />}></Route>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/cart" element={<Cart />}></Route>
            <Route exact path="/feedback" element={<Feedback />}></Route>
            <Route exact path="/itemdetails/:id" element={<Itemdetails />}></Route>
            <Route exact path="/loading" element={<Loading />}></Route>
          </Routes>
        </Router>
      </>
    );
  }
}
