import React, { useState } from "react";
import { usePrevious } from "../../utils";
import "./SlidePagination.css";
import Corosal from "../Corosal";

const SlidePagination = ({ width, components }) => {
  let [index, setIndex] = useState(1);
  let [actionSide, setActionSide] = useState("L");
  const prevIndex = usePrevious(index);
  const next = () => {
    setActionSide("R");
    if (index === 4) {
      setIndex(1);
      return;
    }
    setIndex(index + 1);
  };
  const prev = () => {
    setActionSide("L");
    if (index === 1) {
      setIndex(4);
      return;
    }
    setIndex(index - 1);
  };
  return (
    <div className="pagination-parent">
      <div className="header">Projects</div>
      <div className="slide-pagination">
        <div className="pagination-content">
          <Corosal index={index} side={actionSide} components={components} />
        </div>
        <Pagination
          prevIndex={prevIndex}
          index={index}
          prev={prev}
          next={next}
        />
      </div>
    </div>
  );
};

export default SlidePagination;

function Pagination({ prevIndex, index, prev, next }) {
  return (
    <div className={`go${prevIndex}to${index} pagination-action`}>
      <div className="control">
        <svg onClick={prev} className="button">
          <path
            d="M16 37L4 20 16 3"
            fill="none"
            stroke="#e9eef2"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg onClick={next} className="button">
          <path
            d="M4 37l12-17L4 3"
            fill="none"
            stroke="#e9eef2"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <svg width="245" height="30" viewBox="0 0 196 24">
        <rect
          className="pagination"
          x="0"
          y="0"
          width="200"
          height="20"
          fill="#0b051d"
        />
        <circle
          className="c1"
          r="12"
          cy="12"
          cx="12"
          id="circle2672"
          style={{
            stroke: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        />
        <circle
          className="c2"
          style={{
            stroke: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
          id="circle2656"
          cx="70"
          cy="12"
          r="12"
        />
        <circle
          className="c3"
          style={{
            stroke: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
          id="circle2656"
          cx="128"
          cy="12"
          r="12"
        />
        <circle
          className="c4"
          style={{
            stroke: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
          id="circle2656"
          cx="184"
          cy="12"
          r="12"
        />
        <g className="cut">
          <rect
            className="pagination"
            x="0"
            y="0"
            width="200"
            height="20"
            fill="#335"
          />
        </g>
      </svg>
    </div>
  );
}
