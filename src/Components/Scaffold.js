import React, { Component } from "react";

export default class Scaffold extends Component {
  render() {
    let {
      title,
      productImage1,
      productImage2,
      productImage3,
      intensity,
      description,
      accordsImage,
      notesImage,
    } = this.props;
    return (
      <>
        <div
          className="container"
          style={{ position: "relative", top: "80px" }}
        >
          <h1 className="my-4">
            <strong>{title}</strong>
          </h1>
        </div>
        <div
          className="container "
          style={{ position: "relative", top: "80px" }}
        >
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
            style={{ height: "580px", width: "750px" }}
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={productImage1}
                  className="d-block w-100"
                  alt="..."
                  style={{ height: "500px" }}
                />
              </div>
              <div className="carousel-item">
                <img src={productImage2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={productImage3} className="d-block w-100" alt="..." />
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
        </div>

        <div className="container my-4">
          <h3>
            <strong>Description</strong>
          </h3>
          <p style={{ opacity: 0.8 }}>{description}</p>
        </div>
        <div className="container my-4" style={{ opacity: 0.899 }}>
          <strong> Intensity:</strong> {intensity}
        </div>
        <div className="container my-4">
          <div className="row">
            <div className="col-md-6">
              <img
                src={accordsImage}
                alt="accords"
                style={{ height: "300px", width: "300px" }}
              />
            </div>
            <div className="col-md-6">
              <h3>
                <strong>Accords</strong>
              </h3>
              <p style={{ opacity: 0.8 }}>
                Justifies to a harmonious blend of multiple fragrance notes that
                creates a distinct and recognizable scent.
              </p>
            </div>
          </div>
        </div>

        <div className="container my-4">
          <div className="row">
            <div className="col-md-6">
              <h3>
                <strong>Notes</strong>
              </h3>
              <p style={{ opacity: 0.8 }}>
                Refer to the individual components or ingredients that make up a
                fragrance. A perfume is composed of several notes, each of which
                contributes to the overall aroma of the fragrance.
              </p>
            </div>
            <div className="col-md-6 text-right">
              <img
                src={notesImage}
                alt="notes"
                style={{ height: "300px", width: "420px" }}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
