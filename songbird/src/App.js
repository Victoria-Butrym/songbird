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
          <div className="logo-and-score">
            <span className="song">
              Song<span className="bird">bird</span>
            </span>
            <Score score={score} />
          </div>
          <nav className="header-nav"></nav>
        </header>
        <main>
          <section className="current-bird-section"></section>
          <section className="answers-section">
            <aside className="answers"></aside>
            <aside className="current-answer"></aside>
          </section>
          <button className="next">Next Level</button>
        </main>
      </div>
    );
  }
}

export default App;
