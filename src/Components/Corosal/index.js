import React from "react";

import { useTransition } from "react-spring";
import "./Corosal.css";

export default function Corosal({ index, side, components }) {
  const transitions = useTransition(
    index,
    p => p,
    side === "L"
      ? {
          from: { opacity: 0, transform: "translate3d(100%,0,0)" },
          enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
          leave: { opacity: 0, transform: "translate3d(-50%,0,0)" }
        }
      : {
          from: { opacity: 0, transform: "translate3d(-100%,0,0)" },
          enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
          leave: { opacity: 0, transform: "translate3d(50%,0,0)" }
        }
  );
  return (
    <div className="simple-trans-main">
      {transitions.map(({ item, props, key }) => {
        const Page = components[item - 1];
        return <Page key={key} style={props} />;
      })}
    </div>
  );
}
