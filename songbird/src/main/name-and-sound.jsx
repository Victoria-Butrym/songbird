import React from "react";

import AudioPlayer from "react-h5-audio-player";

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

export default NameAndSound;
