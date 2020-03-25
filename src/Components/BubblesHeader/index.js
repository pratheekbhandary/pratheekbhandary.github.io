import React, {
  useMemo,
  useState,
  useCallback,
  useEffect,
  useRef
} from "react";
import { makeStyles } from "@material-ui/styles";

import { useTheme } from "@material-ui/styles";
import "./BubbleHeader.css";
import IntroDescription from "../IntroDescription";
const useStyles = makeStyles(theme => ({
  wrapper: {
    display: "flex",
    height: "100%",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
}));
export default function Bubbles() {
  const [widthOfAnimation, setWidthOfAnimation] = useState(0);
  const header = useRef(null);
  const centered = useRef(null);
  const theme = useTheme();
  const classes = useStyles();

  useMemo(() => {
    const bArray = [];
    for (let i = 0; i < widthOfAnimation; i++) {
      bArray.push(i);
    }
    bArray.length && init(centered.current, bArray, theme);
  }, [theme, widthOfAnimation]);

  const setWidth = useCallback(() => {
    setWidthOfAnimation(header.current.offsetWidth);
  }, [setWidthOfAnimation]);

  useEffect(() => {
    setWidth();
    window.addEventListener("resize", setWidth);
    return () => window.removeEventListener("resize", setWidth);
  }, [setWidth, widthOfAnimation]);

  return (
    <div className={classes.wrapper}>
      <div className="centered" ref={centered}>
        <h1 className="bubbles" ref={header}>
          Heya I'm Pratheek Bhandary
        </h1>
        <IntroDescription />
      </div>
    </div>
  );
}

const bubbleLifeTime = 10;
const noOfBubbles = 20;
var sArray = [4, 6, 8, 10, 12];

function init(centered, bArray, theme) {
  var bubble;
  centered.childNodes.forEach(x => {
    if ("circle_container" === x.className) {
      centered.removeChild(x);
    }
  });
  for (var i = 0; i < noOfBubbles; i++) {
    bubble = createBubble(bArray, theme);
    centered.appendChild(bubble);
  }
}

function createBubble(bArray, theme) {
  var circleContainer = document.createElement("div");
  circleContainer.classList.add("circle_container");
  circleContainer.style.left = randomValue(bArray) + "px";
  circleContainer.style.animationDelay = Math.random() * bubbleLifeTime + "s";
  var size = randomValue(sArray);
  circleContainer.style.background = theme.currentTheme.color;
  circleContainer.style.width = size + "px";
  circleContainer.style.height = size + "px";

  return circleContainer;
}

function randomValue(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
