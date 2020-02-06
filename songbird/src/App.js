import React, { Component, Fragment } from "react";
import "./App.css";
import "./header/header.css";

import Score from "./header/score";

class Answers extends Component {
  render() {
    return (
      <Fragment>
        <aside className="answers"></aside>
      </Fragment>
    );
  }
}

class NextLevel extends Component {
  render() {
    return <button className="next">Next Level</button>;
  }
}

// const Score = ({ score }) => {
//   return <span className="score">Score: {score}</span>;
// };

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
            <Answers />
            <aside className="current-answer"></aside>
          </section>
          <NextLevel />
        </main>
      </div>
    );
  }
}

export default App;
