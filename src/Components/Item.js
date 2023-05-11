import React, { Component } from "react";
import { Link } from "react-router-dom";
import Itemdetails from "./Itemdetails";
import Loading from "./Loading";

export class Item extends Component {
  render() {
    let {title , description, imageurl}=this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
          <Link className="" to="/itemdetails">
          <img src={imageurl} className="card-img-top" alt="..." />
          </Link>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <Link to="/loading" className="btn btn-sm btn-secondary">
              Buy Now
            </Link>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Item;
