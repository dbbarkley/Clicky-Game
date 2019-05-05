import React from "react";
import "./NavStatus.css";

class NavStatus extends React.Component {
  state = {
    status: "",
    animation: false
  };

  componentWillReceiveProps({ score, topScore }) {
    const newState = { animation: true };
    if (score === 0 && topScore === 0) {
      newState.status = "";
    } else if (score === 0 && topScore > 0) {
      newState.status = "wrong";
    } else {
      newState.status = "right";
    }
    this.setState(newState, () =>
      setTimeout(() => this.setState({ animation: false }), 500)
    );
  }

  renderStatus = () => {
    if (this.state.status === "right"){
      return "Correct!"
    }
    else if (this.state.status === "wrong"){
      return "You missed!"
    }
    else {
      return "Click on a picture to begin!";
    }
  };

  render() {
    return (
      <span className={`col-12 col-md-4 status ${this.state.animation ? this.state.status : ""}`}>
        {this.renderStatus()}
      </span>
    );
  }
}

export default NavStatus;