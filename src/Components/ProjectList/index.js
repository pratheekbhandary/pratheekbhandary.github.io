import React from "react";
import { animated } from "react-spring";
import all from "./projects.json";
import ProjectTile from "./ProjectTile";

const ProjectSet1 = ({ style }) => (
  <animated.div style={{ ...style }}>
    <ProjectTile projects={all.projects.slice(0, 2)} />
  </animated.div>
);

const ProjectSet2 = ({ style }) => (
  <animated.div style={{ ...style }}>
    <ProjectTile projects={all.projects.slice(2, 4)} />
  </animated.div>
);
const ProjectSet3 = ({ style }) => (
  <animated.div style={{ ...style }}>
    <ProjectTile projects={all.projects.slice(4, 6)} />
  </animated.div>
);
const ProjectSet4 = ({ style }) => (
  <animated.div style={{ ...style }}>
    <ProjectTile projects={all.projects.slice(6)} />
  </animated.div>
);

export default [ProjectSet1, ProjectSet2, ProjectSet3, ProjectSet4];
