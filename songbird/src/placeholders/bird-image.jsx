import React, { Fragment } from "react";

import "../assets/current-bird.css";

const BirdImagePlaceholder = ({ picture, correctPicture, guessed }) => {
  let src;
  guessed ? (src = correctPicture) : (src = picture);
  return (
    <Fragment>
      <img src={src} alt="bird" className="bird-placeholder" />
    </Fragment>
  );
};

export default BirdImagePlaceholder;
