import React, { Fragment } from "react";
import bird from "../assets/bird.06a46938.jpg";

import "../assets/current-bird.css";

const BirdImagePlaceholder = () => {
  return (
    <Fragment>
      <img src={bird} alt="bird" className="bird-placeholder" />
    </Fragment>
  );
};

export default BirdImagePlaceholder;
