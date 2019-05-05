import React from "react";
import NavStatus from "../NavStatus/NavStatus.js";
import "./Nav.css";

const Nav = props => (
  <>
  <div className="row align-items-center nav">
    <span className="col-12 col-md-4 title" href="/">Clicky Game</span>
    <NavStatus score={props.score} topScore={props.topScore} />
    <span className="col-12 col-md-4 points">Points: {props.score} | Top Score: {props.topScore}</span>
  </div>
    <header className="header">
  </header>
  </>
);



export default Nav;