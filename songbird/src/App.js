import React, { Component } from "react";
import "./App.css";
import "./header/header.css";

const Score = ({ score }) => {
  return <span className="score">Score: {score}</span>;
};

class App extends Component {
  state = {
    score: 0
  };

  render() {
    const { score } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <span className="song">
            Song<span className="bird">bird</span>
          </span>
          <Score score={score} />
        </header>
      </div>
    );
  }
}

export default App;
