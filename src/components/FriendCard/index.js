import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div clasName="container">
      <div className="card">
        <img className="img-container" alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default FriendCard;
