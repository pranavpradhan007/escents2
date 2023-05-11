import React, { Component } from "react";

export default class Loading extends Component {
  render() {
    return (
      <div className="spinner-border" role="status" style={{ top: "60px" }}>
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
}
