import React, { Component, Fragment } from "react";
// import AudioPlayer from "react-h5-audio-player";

import "./App.css";
import "./header/header.css";
import "./assets/categories.css";
import "./assets/answer.css";

import bird from "./assets/bird.06a46938.jpg";

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
      {guessed ? <h2>{correctAnswer.name}</h2> : <h2>******</h2>}
      <audio
        className="current-bird-sound"
        src={correctAnswer.audio}
        controls
      />
    </aside>
  );
};

const CurrentAnswerData = ({ currentAnswer }) => {
  return (
    <Fragment>
      <section className="bird-info">
        <BirdImagePlaceholder picture={currentAnswer.image} />
        <aside className="bird-names">
          <h3 className="current-answer_bird-name_ru">{currentAnswer.name}</h3>
          <h4 className="current-answer_bird-name_latin">
            {currentAnswer.species}
          </h4>
          <audio
            className="current-bird-sound"
            src={currentAnswer.audio}
            controls
          />
        </aside>
      </section>
      <p className="bird-description">{currentAnswer.description}</p>
    </Fragment>
  );
};

class App extends Component {
  getRandomBird = category => {
    return category[Math.floor(Math.random() * category.length)];
  };

  state = {
    score: 0,
    currentScore: 5,
    next: 1,
    activeCategory: categories[0],
    possibleAnswers: birdsData[0],
    guessed: false,
    answerChosen: false,
    correctAnswer: this.getRandomBird(birdsData[0]),
    currentAnswer: null
  };

  isGuessed = (answer, correct) => {
    const { currentScore, score } = this.state;

    if (currentScore < 0) return;

    answer === correct.name
      ? this.setState({
          guessed: true,
          score: score + currentScore,
          currentScore: 5
        })
      : this.setState({
          guessed: false
        });
  };

  chooseAnswer = e => {
    const answer = e.target.dataset.name;
    const { correctAnswer, guessed, currentScore } = this.state;

    if (guessed) return;

    this.setState({
      answerChosen: true,
      currentAnswer: this.state.possibleAnswers[e.target.id - 1],
      currentScore: currentScore - 1
    });

    this.isGuessed(answer, correctAnswer);
  };

  nextCategory = () => {
    const { next, guessed } = this.state;

    if (next === 6 || !guessed) return;

    this.setState({
      possibleAnswers: birdsData[next],
      activeCategory: categories[next],
      next: next + 1,
      guessed: false,
      answerChosen: false,
      correctAnswer: this.getRandomBird(birdsData[next])
    });
  };

  render() {
    const {
      score,
      possibleAnswers,
      activeCategory,
      answerChosen,
      guessed,
      correctAnswer,
      currentAnswer
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
            <BirdImagePlaceholder
              picture={bird}
              correctPicture={correctAnswer.image}
              guessed={guessed}
            />
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
              {!answerChosen ? (
                <AnswerPlaceholder />
              ) : (
                <CurrentAnswerData currentAnswer={currentAnswer} />
              )}
            </aside>
          </section>
          <NextLevel onClick={this.nextCategory} guessed={guessed} />
        </main>
      </div>
    );
  }
}

export default App;

// TODO: 2) score 3) responsive 4) modal window 6) custom player 7) custom bird data
