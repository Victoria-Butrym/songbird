import React, { Fragment } from "react";

import NextLevel from "../main/next-level";

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

export default ModalWindow;
