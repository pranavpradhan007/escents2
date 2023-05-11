import React, { Component } from "react";

export default class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      comment: "",
      emailValid: false,
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });

    if (name === "email") {
      this.setState({
        emailValid: target.validity.valid,
      });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <>
        <div
          className="container"
          style={{ position: "relative", top: "60px", height: 100 }}
        >
          <h1 className="my-3">
            <strong>We would love to hear from you!</strong>
          </h1>
          <h2 className="my-3">
            <strong>Contact form</strong>
          </h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address*</label>
              <input
                type="email"
                className={`form-control ${
                  this.state.emailValid ? "is-valid" : "is-invalid"
                }`}
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                required
              />
              <div className="invalid-feedback">
                Please enter a valid email address.
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone number</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                value={this.state.phone}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="comment">Comment</label>
              <textarea
                className="form-control"
                id="comment"
                name="comment"
                rows="3"
                value={this.state.comment}
                onChange={this.handleInputChange}
                style={{ resize: "none" }}
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-dark"
              style={{ position: "relative", top: "10px" }}
            >
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }
}
