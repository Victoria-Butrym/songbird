import React, { Component, Fragment } from "react";
import AudioPlayer from "react-h5-audio-player";

import "./App.css";
import "./header/header.css";
import "./assets/categories.css";
import "./assets/answer.css";
import "./assets/modal-window.css";
import "react-h5-audio-player/lib/styles.css";
import "./assets/audio-player.css";

import bird from "./assets/bird.06a46938.jpg";
import wrongSound from "./data/sounds/wrong.mp3";
import correctSound from "./data/sounds/correct.mp3";

import Score from "./header/score";
import birdsData from "./data/birds-custom";
import categories from "./data/categories";
import Logo from "./header/logo";
import AnswerPlaceholder from "./placeholders/answer-placeholder";
import BirdImagePlaceholder from "./placeholders/bird-image";

const proxy = "https://cors-anywhere.herokuapp.com/";

(function() {
  fetch(
    `${proxy}https://www.xeno-canto.org/api/2/recordings?query=Lanius collurio`
  )
    .then(res => res.json())
    .then(data => console.log(data.recordings[0].file));
})();

const Categories = ({ activeCategory }) => {
  return (
    <nav className="header-nav">
      <ul className="categories">
        {categories.map(category => {
          if (category === activeCategory) {
            return (
              <li
                className="category active-cat"
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

const Answers = ({
  possibleAnswers,
  onClick,
  guessed,
  defaultStatus,
  answerChosen
}) => {
  let statusClass;
  guessed ? (statusClass = "correct") : (statusClass = "unactive");

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
              <div className={statusClass}></div>
              {/* <div className="unactive"></div> */}
              {answer.name}
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

const ModalWindow = ({ score, onClick }) => {
  let congratsMessage;

  score === 30
    ? (congratsMessage = "Абсолютная победа!")
    : (congratsMessage = "Поздравляем!");

  return (
    <Fragment>
      <section className="modal-window">
        <h2 className="congrats">{congratsMessage}</h2>
        <span className="result">
          Вы прошли викторину и набрали <strong>{score}</strong> из{" "}
          <strong>30</strong> баллов!
        </span>
        <NextLevel guessed={true} text="Играть снова" onClick={onClick} />
      </section>
    </Fragment>
  );
};

const NextLevel = ({ onClick, guessed, text }) => {
  return guessed ? (
    <button onClick={onClick} className="active-next">
      {text}
    </button>
  ) : (
    <button onClick={onClick} className="next">
      {text}
    </button>
  );
};

const NameAndSound = ({ guessed, correctAnswer }) => {
  return (
    <aside className="current-bird_name-sound">
      {guessed ? <h2>{correctAnswer.name}</h2> : <h2>******</h2>}
      <AudioPlayer
        className="current-bird-sound"
        src={correctAnswer.audio}
        autoPlayAfterSrcChange={false}
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
          <AudioPlayer
            className="current-bird-sound"
            src={currentAnswer.audio}
            autoPlayAfterSrcChange={false}
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

  setDefaultState = () => {
    this.setState({
      score: 0,
      currentScore: 5,
      next: 1,
      activeCategory: categories[0],
      possibleAnswers: birdsData[0],
      guessed: false,
      answerChosen: false,
      correctAnswer: this.getRandomBird(birdsData[0]),
      currentAnswer: null,
      gameEnded: false
    });
  };

  state = {
    score: 0,
    currentScore: 5,
    next: 1,
    activeCategory: categories[2], // change to 0
    possibleAnswers: birdsData[2], // change to 0
    guessed: false,
    answerChosen: false,
    correctAnswer: this.getRandomBird(birdsData[2]), // change to 0
    currentAnswer: null,
    gameEnded: false,
    defaultStatus: "unactive"
  };

  answersSectionRef = React.createRef();
  nextLevelRef = React.createRef();
  correctBirdSectionRef = React.createRef();

  guessed = (answer, current) => {
    return answer === current.name;
  };

  isGuessed = (answer, correct) => {
    const { currentScore, score } = this.state;

    if (currentScore < 0) return;

    answer === correct.name
      ? this.setState({
          guessed: true,
          score: score + currentScore,
          currentScore: 0
        })
      : this.setState({
          guessed: false
        });
  };

  playAgain = () => {
    this.setDefaultState();
  };

  changeAnswerStatus = e => {
    const { guessed, correctAnswer } = this.state;

    // if (guessed) return;

    const answer = e.target.dataset.name;

    this.guessed(answer, correctAnswer)
      ? (e.target.firstChild.className = "correct")
      : (e.target.firstChild.className = "wrong");
  };

  clickSound = (answer, correct) => {
    const sound = new Audio();

    // console.log(this.state.guessed);

    this.guessed(answer, correct)
      ? (sound.src = correctSound)
      : (sound.src = wrongSound);
    sound.play();
  };

  chooseAnswer = e => {
    const answer = e.target.dataset.name;
    const { correctAnswer, guessed, currentScore } = this.state;

    this.clickSound(answer, correctAnswer);

    // if (guessed) return;

    this.changeAnswerStatus(e);

    this.setState({
      answerChosen: true,
      currentAnswer: this.state.possibleAnswers[e.target.id - 1],
      currentScore: currentScore - 1,
      guessed: true
    });

    console.log(guessed);

    this.isGuessed(answer, correctAnswer);
  };

  showModalWindow = () => {
    this.setState({
      gameEnded: true
    });

    // console.log(this.state.gameEnded);

    this.answersSectionRef.current.style.display = "none";
    this.correctBirdSectionRef.current.style.display = "none";
  };

  nextCategory = () => {
    const { next, guessed } = this.state;
    if (next === 6) this.showModalWindow();

    if (next === 6 || !guessed) return;

    this.setState({
      possibleAnswers: birdsData[next],
      activeCategory: categories[next],
      next: next + 1,
      guessed: false,
      answerChosen: false,
      correctAnswer: this.getRandomBird(birdsData[next]),
      currentScore: 5
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
      currentAnswer,
      gameEnded,
      defaultStatus
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

        {gameEnded ? (
          <ModalWindow score={score} onClick={this.playAgain} />
        ) : (
          <main>
            <section
              ref={this.correctBirdSectionRef}
              className="current-bird-section"
            >
              <BirdImagePlaceholder
                picture={bird}
                correctPicture={correctAnswer.image}
                guessed={guessed}
              />
              <NameAndSound guessed={guessed} correctAnswer={correctAnswer} />
            </section>
            <section ref={this.answersSectionRef} className="answers-section">
              <aside className="answers">
                <Answers
                  possibleAnswers={possibleAnswers}
                  onClick={this.chooseAnswer}
                  defaultStatus={defaultStatus}
                  guessed={guessed}
                  answerChosen={answerChosen}
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
            <NextLevel
              onClick={this.nextCategory}
              guessed={guessed}
              text="Next Level"
            />
          </main>
        )}
      </div>
    );
  }
}

export default App;

// TODO: 1) toggle answer status 2) responsive 3) custom bird data
