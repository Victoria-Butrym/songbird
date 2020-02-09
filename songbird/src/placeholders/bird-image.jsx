import React, { Fragment } from "react";

import "../assets/current-bird.css";

const BirdImagePlaceholder = ({ picture }) => {
  return (
    <Fragment>
      <img src={picture} alt="bird" className="bird-placeholder" />
    </Fragment>
  );
};

export default BirdImagePlaceholder;
