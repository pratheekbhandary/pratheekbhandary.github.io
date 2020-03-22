import React from "react";
import { animated } from "react-spring";
const ProjectSet1 = ({ style }) => (
  <animated.div style={{ ...style, background: "lightpink" }}>A</animated.div>
);

const ProjectSet2 = ({ style }) => (
  <animated.div style={{ ...style, background: "lightblue" }}>B</animated.div>
);
const ProjectSet3 = ({ style }) => (
  <animated.div style={{ ...style, background: "lightgreen" }}>C</animated.div>
);
const ProjectSet4 = ({ style }) => (
  <animated.div style={{ ...style, background: "lightgreen" }}>D</animated.div>
);

export default [ProjectSet1, ProjectSet2, ProjectSet3, ProjectSet4];
