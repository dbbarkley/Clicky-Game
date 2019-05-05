import React from "react";
import Nav from "../NavBar/Nav.js";
import Container from "../Container/Container.js";
import Item from "../Item/Item.js";
import Pictures from "../../Pictures.json";

class Game extends React.Component {
  state = {
    Pictures,
    score: 0,
    topScore: 0
  };
  shufflePictures = (Pictures) => {
    for (var i = 0; i < Pictures.length - 1; i++) {
      var j = i + Math.floor(Math.random() * (Pictures.length - i));
      var temp = Pictures[j];
      Pictures[j] = Pictures[i];
      Pictures[i] = temp;
    }
    return Pictures;
  };

  resetPictures = (Pictures) => {
    const resetPictures = Pictures.map(item => ({ ...item, clicked: false }));
    return this.shufflePictures(resetPictures);
  };

  handleRight = (rightPictures) => {
    const newScore = this.state.score + 1;
    const newTopScore = (newScore > this.state.topScore) ? newScore : this.state.topScore;
    this.setState({
      Pictures: this.shufflePictures(rightPictures),
      score: newScore,
      topScore: newTopScore
    });
  };

  handleWrong = (wrongPictures) => {
    this.setState({
      Pictures: this.resetPictures(wrongPictures),
      score: 0
    });
  };

  handleClick = (id) => {
    let guessed = false;
    const nextPictures = this.state.Pictures.map(item => {
      const newItem = { ...item };
      if (newItem.id === id && !newItem.clicked) {
        newItem.clicked = true;
        guessed = true;
      }
      return newItem;
    });
    guessed ? this.handleRight(nextPictures) : this.handleWrong(nextPictures);
  };
  

  render() {
    return (
      <>
        <Nav score={this.state.score} topScore={this.state.topScore} />
        <Container>
          {this.state.Pictures.map(item => (
            <Item
              key={item.id}
              id={item.id}
              shake={!this.state.score && this.state.topScore}
              handleClick={this.handleClick}
              image={item.image}
            />
          ))}
        </Container>
      </>
    );
  }
}

export default Game;