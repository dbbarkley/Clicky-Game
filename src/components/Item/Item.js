import React from "react";
import "./Item.css";

const Item = props => (
  <div className="col-6 col-lg-3 ">
  <div
    onClick={() => props.handleClick(props.id)}
    style={{ backgroundImage: `url("${props.image}")` }}
    className={`item ${props.shake ? "shake" : ""}`}
  />
  </div>
);

export default Item;