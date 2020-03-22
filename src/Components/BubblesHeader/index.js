import React, {
  useMemo,
  useState,
  useCallback,
  useEffect,
  useRef
} from "react";
import "./BubbleHeader.css";
import IntroDescription from "../IntroDescription";

export default function Bubbles() {
  const [widthOfAnimation, setWidthOfAnimation] = useState(0);
  const header = useRef(null);
  const centered = useRef(null);

  useMemo(() => {
    const bArray = [];
    for (let i = 0; i < widthOfAnimation; i++) {
      bArray.push(i);
    }
    console.log(centered.current);
    bArray.length && init(centered.current, bArray);
  }, [widthOfAnimation]);

  const setWidth = useCallback(() => {
    setWidthOfAnimation(header.current.offsetWidth);
  }, [setWidthOfAnimation]);

  useEffect(() => {
    setWidth();
    window.addEventListener("resize", setWidth);
    return () => window.removeEventListener("resize", setWidth);
  }, [setWidth, widthOfAnimation]);

  return (
    <div className="centered" ref={centered}>
      <h1 className="bubbles" ref={header}>
        Heya I'm Pratheek Bhandary
      </h1>
      <IntroDescription />
    </div>
  );
}

const bubbleLifeTime = 10;
const noOfBubbles = 20;
var sArray = [4, 6, 8, 10, 12];

function init(centered, bArray) {
  var bubble;
  centered.childNodes.forEach(x => {
    if ("circle_container" === x.className) {
      centered.removeChild(x);
    }
  });
  console.log("centered.childElementCount", centered.childElementCount);
  for (var i = 0; i < noOfBubbles; i++) {
    bubble = createBubble(bArray);
    centered.appendChild(bubble);
  }
}

function createBubble(bArray) {
  var circleContainer = document.createElement("div");
  circleContainer.classList.add("circle_container");
  circleContainer.style.left = randomValue(bArray) + "px";
  var circle = createCircle();
  circleContainer.appendChild(circle);

  return circleContainer;
}

function createCircle() {
  var circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.animationDelay = Math.random() * bubbleLifeTime + "s";
  var size = randomValue(sArray);
  circle.style.background = "white";
  circle.style.width = size + "px";
  circle.style.height = size + "px";

  return circle;
}

function randomValue(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
