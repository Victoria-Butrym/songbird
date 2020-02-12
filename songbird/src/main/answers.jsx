import React, { Fragment } from "react";

const Answers = ({ possibleAnswers, onClick, statusRef }) => {
  return (
    <Fragment>
      <ul className="possible-answers" ref={statusRef}>
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

export default Answers;
