import React, { Component } from "react";

import "./App.css";
import "./assets/header.css";
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
import Answers from "./main/answers";
import Categories from "./header/categories";
import ModalWindow from "./main/modal-window";
import NextLevel from "./main/next-level";
import NameAndSound from "./main/name-and-sound";
import CurrentAnswerData from "./main/current-answer-data";

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
    activeCategory: categories[0],
    possibleAnswers: birdsData[0],
    guessed: false,
    answerChosen: false,
    correctAnswer: this.getRandomBird(birdsData[0]),
    currentAnswer: null,
    gameEnded: false
  };

  answersSectionRef = React.createRef();
  nextLevelRef = React.createRef();
  correctBirdSectionRef = React.createRef();
  answerStatusRef = React.createRef();

  isGuessed = (answer, current) => {
    return answer === current.name;
  };

  changeScore = (answer, correct) => {
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

    if (guessed) return;

    const answer = e.target.dataset.name;

    this.isGuessed(answer, correctAnswer)
      ? (e.target.firstChild.className = "correct")
      : (e.target.firstChild.className = "wrong");
  };

  resetStatus = () => {
    const answers = this.answerStatusRef.current.children;

    for (let i = 0; i < answers.length; i++) {
      answers[i].firstChild.className = "unactive";
    }
  };

  clickSound = (answer, correct) => {
    const sound = new Audio();

    this.isGuessed(answer, correct)
      ? (sound.src = correctSound)
      : (sound.src = wrongSound);
    sound.play();
  };

  chooseAnswer = e => {
    const answer = e.target.dataset.name;
    const { correctAnswer, guessed, currentScore } = this.state;

    this.setState({
      answerChosen: true,
      currentAnswer: this.state.possibleAnswers[e.target.id - 1]
    });

    if (!guessed) {
      this.setState({
        currentScore: currentScore - 1,
        guessed: true
      });

      this.changeScore(answer, correctAnswer);
      this.changeAnswerStatus(e);
      this.clickSound(answer, correctAnswer);
    }
  };

  showModalWindow = () => {
    this.setState({
      gameEnded: true
    });

    this.answersSectionRef.current.style.display = "none";
    this.correctBirdSectionRef.current.style.display = "none";
  };

  nextCategory = () => {
    const { next, guessed } = this.state;
    if (next === categories.length) this.showModalWindow();

    if (next === categories.length || !guessed) return;

    this.setState({
      possibleAnswers: birdsData[next],
      activeCategory: categories[next],
      next: next + 1,
      guessed: false,
      answerChosen: false,
      correctAnswer: this.getRandomBird(birdsData[next]),
      currentScore: 5
    });

    this.resetStatus();
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
      gameEnded
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
                  guessed={guessed}
                  answerChosen={answerChosen}
                  statusRef={this.answerStatusRef}
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
