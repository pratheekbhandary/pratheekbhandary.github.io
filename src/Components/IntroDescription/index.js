import React, { Fragment } from "react";
import "./IntroDescription.css";

const SimpleApp = () => {
  return (
    <Fragment>
      <div className="tagline">Love to Code | Draw | Travel | Learn</div>
      <div className={`icons-social`}>
        <a href="https://github.com/pratheekbhandary">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://twitter.com/PratheekBhandry">
          <i className="fab fa-twitter"></i>
        </a>

        <a href="https://www.artstation.com/pratheekbhandary">
          <i className="fab fa-artstation"></i>
        </a>
        <a href="https://www.linkedin.com/in/pratheekbhandary/">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://codesandbox.io/u/pratheekbhandary">
          <i className="fas fa-cube"></i>
        </a>
        <a href="https://codesandbox.io/u/pratheek-arista">
          <i className="fas fa-cube"></i>
        </a>
      </div>
    </Fragment>
  );
};

export default SimpleApp;
