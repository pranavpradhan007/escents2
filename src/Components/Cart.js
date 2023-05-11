import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    return (
      <>
        <div
          className="container"
          style={{ position: "relative", top: "60px", height: 100 }}
        >
          <h1>
            <strong>Your Cart</strong>
          </h1>
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
