/* eslint-disable no-undef */
import { useRef, useEffect } from "react";

export function usePrevious(value) {
  const ref = useRef(0);
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export const isChromeMobile = () =>
  navigator && navigator.userAgent && /Chrome/i.test(navigator.userAgent);

// Opera 8.0+
export const isOpera = () =>
  (!!window.opr && !!opr.addons) ||
  !!window.opera ||
  navigator.userAgent.indexOf(" OPR/") >= 0;
// Firefox 1.0+
export const isFirefox = () => typeof InstallTrigger !== "undefined";

// Safari 3.0+ "[object HTMLElementConstructor]"
export const isSafari = () =>
  /constructor/i.test(window.HTMLElement) ||
  (function (p) {
    return p.toString() === "[object SafariRemoteNotification]";
  })(
    !window["safari"] ||
      (typeof safari !== "undefined" && safari.pushNotification)
  );

// Internet Explorer 6-11
export const isIE = () => /*@cc_on!@*/ false || !!document.documentMode;

// Edge 20+
export const isEdge = () => !isIE && !!window.StyleMedia;

// Chrome 1 - 71
export const isChrome = () =>
  !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
