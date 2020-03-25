import { useRef, useEffect } from "react";

export function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
