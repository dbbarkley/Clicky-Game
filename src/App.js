import React from "react";
import FriendCard from "./components/FriendCard";
import Jumbotron from "./components/Jumbotron"
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {
  state = {
    friends: friends
  }

  removeFriend = id => {
    const friends = this.state.friends.filter(friend => friend.id !== id);
    this.setState({ friends });
  }

  render() {
    return (
      <div>
      <Jumbotron />
      <Wrapper>
        <h1 className="title">Friends List</h1>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            />
        )
        )}
      </Wrapper>
      </div>
    )
  }
}

export default App;
