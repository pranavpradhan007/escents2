import React, { Component } from "react";
import { Link } from "react-router-dom";
import Feedback from "./Feedback";

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="container my-4" style={{ textAlign: "center" }}>
          <h2
            className="my-4"
            style={{ position: "relative", top: "60px", height: 100 }}
          >
            <strong>ESSENTIAL SCENTS FOR YOUR DAILY NEEDS.</strong>
          </h2>
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide my-3"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active ">
                <img
                  src="https://cdn.shopify.com/s/files/1/0731/0914/3874/files/DSC08820_b44ae050-6353-40cd-90ed-10acc721763d.jpg?v=1682969077&width=3840"
                  className="d-block w-100"
                  alt="Aura"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://cdn.shopify.com/s/files/1/0731/0914/3874/files/DSC08740.jpg?v=1682969013&width=1500"
                  className="d-block w-100"
                  alt="Aurum and Aura"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://cdn.shopify.com/s/files/1/0731/0914/3874/files/VIGOR_STICKER.jpg?v=1680936268&width=3840"
                  className="d-block w-100"
                  alt="Vigor"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <h3 className="my-4">
            <strong>DISCOVER</strong>
          </h3>
          <p className="my-4" style={{ opacity: 0.8, fontSize: 18 }}>
            We are a fast moving brand which brings you exquisite range of high
            quality unisex fragrances every month.
          </p>
        </div>
        <div className="container-fluid my-4">
          <div className="row">
            <div className="col-md-1 mx-auto">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://cdn.shopify.com/s/files/1/0731/0914/3874/products/SS3.jpg?v=1682570357&width=3840"
                  className="card-img-top"
                  alt="Serenade"
                />
                <div className="card-body"></div>
              </div>
            </div>
            <div className="col-md-4 mx-auto">
              <div className="card" style={{ width: "18rem" }}>
                <h2 className="my-2 mx-3">
                  <strong>ABOUT US</strong>
                </h2>
                <ul className="my-2">
                  <li>
                    <h5>
                      <strong>CONSISTENCY</strong>
                    </h5>
                    <label className="my-2" style={{ opacity: 0.8 }}>
                      Consistency is a hallmark and we believe consistency in
                      quality ensures customer satisfaction.
                    </label>
                  </li>
                  <li>
                    <h5>
                      <strong>INGREDIENT</strong>
                    </h5>
                    <label className="my-2" style={{ opacity: 0.8 }}>
                      Each ingredient is obtained from a specific geographic
                      location where it is renowned for its exceptional quality
                      to serve you the best.
                    </label>
                  </li>
                  <li>
                    <h5>
                      <strong>DIVERSITY</strong>
                    </h5>
                    <label className="my-2" style={{ opacity: 0.8 }}>
                      A diverse range of fragrances help consumer explore their
                      style and taste. Explore your style with new Escents
                      launching every month.
                    </label>
                  </li>
                </ul>
                <div className="card-body"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="container my-4 " style={{ textAlign: "center" }}>
          <Link to="/feedback">
            <button type="button" className="btn btn-dark btn-lg">
              Feedback
            </button>
          </Link>
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
