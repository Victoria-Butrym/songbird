import React, { Component, Fragment } from "react";
import "./App.css";
import "./header/header.css";

import Score from "./header/score";
import birdsData from "./data/birds";

const createAnswers = props => {
  return (
    <Fragment>
      <ul className="possible-answers">
        {props.map(answer => {
          return <li className="possible-answer">{answer.name}</li>;
        })}
      </ul>
    </Fragment>
  );
};

const NextLevel = ({ onClick }) => {
  return (
    <button onClick={onClick} className="next">
      Next Level
    </button>
  );
};

class App extends Component {
  state = {
    score: 0,
    next: 1,
    possibleAnswers: birdsData[0],
    guessed: false
  };

  nextCategory = () => {
    const { next } = this.state;
    if (next === 6) return;
    this.setState({
      possibleAnswers: birdsData[next],
      next: next + 1
    });
  };

  render() {
    const { score, possibleAnswers } = this.state;
    console.log(this.state);
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
            <aside className="answers">{createAnswers(possibleAnswers)}</aside>
            <aside className="current-answer"></aside>
          </section>
          <NextLevel onClick={this.nextCategory} />
        </main>
      </div>
    );
  }
}

export default App;

// TODO: App component renders several times, so you're not able to create <li> answers from fetch
