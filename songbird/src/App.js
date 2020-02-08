import React, { Component, Fragment } from "react";
import "./App.css";
import "./header/header.css";
import "./assets/categories.css";

import Score from "./header/score";
import birdsData from "./data/birds";
import categories from "./data/categories";

const Logo = () => {
  return (
    <Fragment>
      <span className="song">
        Song<span className="bird">bird</span>
      </span>
    </Fragment>
  );
};

const Categories = ({ activeCategory }) => {
  return (
    <nav className="header-nav">
      <ul className="categories">
        {categories.map(category => {
          if (category === activeCategory) {
            return <li className="active-category">{category}</li>;
          }
          return <li className="category">{category}</li>;
        })}
      </ul>
    </nav>
  );
};

const createAnswers = props => {
  return (
    <Fragment>
      <ul className="possible-answers">
        {props.map(answer => {
          return (
            <li className="possible-answer">
              <div className="unactive"></div>
              {answer.name}
            </li>
          );
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
    activeCategory: categories[0],
    possibleAnswers: birdsData[0],
    guessed: false
  };

  nextCategory = () => {
    const { next } = this.state;
    if (next === 6) return;
    this.setState({
      possibleAnswers: birdsData[next],
      activeCategory: categories[next],
      next: next + 1
    });
  };

  render() {
    const { score, possibleAnswers, activeCategory } = this.state;
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <div className="logo-and-score">
            <Logo />
            <Score score={score} />
          </div>
          <Categories activeCategory={activeCategory} />
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
