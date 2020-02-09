import React, { Component, Fragment } from "react";
// import AudioPlayer from "react-h5-audio-player";

import "./App.css";
import "./header/header.css";
import "./assets/categories.css";
import "./assets/answer.css";

import Score from "./header/score";
import birdsData from "./data/birds";
import categories from "./data/categories";
import Logo from "./header/logo";
import AnswerPlaceholder from "./placeholders/answer-placeholder";
import BirdImagePlaceholder from "./placeholders/bird-image";

const Categories = ({ activeCategory }) => {
  return (
    <nav className="header-nav">
      <ul className="categories">
        {categories.map(category => {
          if (category === activeCategory) {
            return (
              <li
                className="active-category"
                key={categories.indexOf(category)}
              >
                {category}
              </li>
            );
          }
          return (
            <li className="category" key={categories.indexOf(category)}>
              {category}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const Answers = ({ possibleAnswers, onClick }) => {
  return (
    <Fragment>
      <ul className="possible-answers">
        {possibleAnswers.map(answer => {
          return (
            <li
              className="possible-answer"
              key={answer.id}
              id={answer.id}
              onClick={onClick}
              data-name={answer.name}
            >
              <div className="unactive"></div>
              {answer.name}
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

const NextLevel = ({ onClick, guessed }) => {
  return guessed ? (
    <button onClick={onClick} className="active-next">
      Next Level
    </button>
  ) : (
    <button onClick={onClick} className="next">
      Next Level
    </button>
  );
};

const NameAndSound = ({ guessed, correctAnswer }) => {
  return (
    <aside className="current-bird_name-sound">
      {guessed ? <h3>{correctAnswer.name}</h3> : <h3>******</h3>}
      <audio
        className="current-bird-sound"
        src={birdsData[0][0].audio}
        controls
      />
    </aside>
  );
};

class App extends Component {
  state = {
    score: 0,
    next: 1,
    activeCategory: categories[0],
    possibleAnswers: birdsData[0],
    guessed: false,
    answerChosen: false,
    correctAnswer: birdsData[0][2]
  };

  chooseAnswer = e => {
    const answer = e.target.dataset.name;
    const { correctAnswer } = this.state;
    answer === correctAnswer.name
      ? this.setState({
          guessed: true
        })
      : this.setState({
          guessed: false
        });
  };

  nextCategory = () => {
    const { next, guessed } = this.state;
    if (next === 6 || !guessed) return;
    this.setState({
      possibleAnswers: birdsData[next],
      activeCategory: categories[next],
      next: next + 1,
      guessed: false,
      correctAnswer: birdsData[next][2]
    });
  };

  render() {
    const {
      score,
      possibleAnswers,
      activeCategory,
      answerChosen,
      guessed,
      correctAnswer
    } = this.state;

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
          <section className="current-bird-section">
            <BirdImagePlaceholder />
            <NameAndSound guessed={guessed} correctAnswer={correctAnswer} />
          </section>
          <section className="answers-section">
            <aside className="answers">
              <Answers
                possibleAnswers={possibleAnswers}
                onClick={this.chooseAnswer}
              />
            </aside>
            <aside className="current-answer">
              {!answerChosen ? <AnswerPlaceholder /> : null}
            </aside>
          </section>
          <NextLevel onClick={this.nextCategory} guessed={guessed} />
        </main>
      </div>
    );
  }
}

export default App;

// TODO: check correctAnswer prop
