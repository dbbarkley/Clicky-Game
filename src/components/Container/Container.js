import React from "react";
import "./Container.css";

const Container = props => (
  <>
  <main className="container">
    <div className="row align-items-center">{props.children}</div>
  </main>
  <footer className="footer">
    <div className="bottom">
      Clicky Game
    </div>
  </footer>
  </>
  );

export default Container;