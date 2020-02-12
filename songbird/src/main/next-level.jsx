import React from "react";

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

export default NextLevel;
