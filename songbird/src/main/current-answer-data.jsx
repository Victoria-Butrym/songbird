import React, { Fragment } from "react";

import AudioPlayer from "react-h5-audio-player";
import BirdImagePlaceholder from "../placeholders/bird-image";

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

export default CurrentAnswerData;
