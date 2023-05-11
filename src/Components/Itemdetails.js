import React, { Component } from "react";
import Scaffold from "./Scaffold";

export default class NumberCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  decrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };
  render() {
    const { count } = this.state;
    return (
      <>
        <Scaffold
          title="Crest"
          productImage1="https://cdn.shopify.com/s/files/1/0731/0914/3874/files/cre.png?v=1682569159&width=990"
          productImage2="https://cdn.shopify.com/s/files/1/0731/0914/3874/files/crest.jpg?v=1682796800&width=990"
          productImage3="https://cdn.shopify.com/s/files/1/0731/0914/3874/files/cr.png?v=1682796800&width=990"
          intensity="*****"
          description="Crest is the perfect choice for all who prefer a fragrance that is lively, energizing and fresh. It is a subtle combination of zesty citrus notes with aromatic notes creating a fresh and rejuvenating aroma. An ideal fragrance for those who excude confidence and energy - the perfect blend of invogirating and refresing scents making it an excellent choice for those who want to smell great while maintaining their active lifestyle."
          accordsImage="https://cdn.shopify.com/s/files/1/0731/0914/3874/files/CREST_A_d4875078-6122-4f46-a39d-4a8481a4d265.png?v=1681502048&width=750"
          notesImage="https://cdn.shopify.com/s/files/1/0731/0914/3874/files/CREST.png?v=1681496657&width=750"
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
              onClick={this.decrementCount}
            >
              -
            </button>
            <button className="btn btn-outline-secondary">{count}</button>
            <button
              className="btn btn-outline-secondary"
              onClick={this.incrementCount}
            >
              +
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
              style={{ display: "inline-block", paddingLeft: 10 }}
            >
              <li style={{ display: "inline-block", marginRight: "10px" }}>
                Contact information
              </li>
              <li style={{ display: "inline-block", marginRight: "10px" }}>
                Email: shop@escents.in
              </li>
              <li style={{ display: "inline-block", marginRight: "675px" }}>
                WhatsApp number: +91 9307189847
              </li>
              <li style={{ display: "inline-block", marginRight: "10px" }}>
                <a href="https://www.instagram.com/escents.in">
                  <img
                    src="https://www.instagram.com/static/images/ico/favicon-192.png/68d99ba29cc8.png"
                    alt="Instagram logo"
                    width="17.5"
                    height="17.5"
                  />
                </a>
              </li>
            </ul>
          </p>
        </div>
      </>
    );
  }
}
