import React, { useEffect, useState, useMemo } from "react";
import { makeStyles } from "@material-ui/styles";

import "./App.css";
import MostlySane from "./Components/MostlySaneAnime";
import Bubbles from "./Components/BubblesHeader";
import SlidePagination from "./Components/SlidePagination";
import ProjectList from "./Components/ProjectList";
import { isChrome, isFirefox, isChromeMobile } from "./utils";
import Timeline from "./Components/Timeline";

const useStyles = makeStyles((theme) => ({
  app: {
    background: theme.currentTheme.background,
    color: theme.currentTheme.color,
  },
  "@global": {
    body: {
      ...theme.currentTheme,
    },
  },
  note: {
    position: "fixed",
    top: "1%",
    right: "1%",
    fontSize: "1rem",
    color: theme.currentTheme.background,
    background: theme.currentTheme.color,
    padding: "2px 5px",
    borderRadius: "5px",
  },
  yMandatory: {
    scrollSnapType: "y mandatory",
    overflowY: "scroll",
    "& > div": {
      scrollSnapAlign: "start",
      scrollSnapStop: "always",
    },
  },
}));

function App() {
  const classes = useStyles();
  const [loadAnimation, setLoadAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadAnimation(false);
    }, 11000);
    return () => clearTimeout(timer);
  }, [setLoadAnimation]);

  const isChromeOrMozilla = useMemo(
    () => isChrome() || isFirefox() || isChromeMobile(),
    []
  );

  if (loadAnimation && isChromeOrMozilla) {
    return (
      <div className={`App ${classes.app}`}>
        <MostlySane />
      </div>
    );
  }

  return (
    <div className={`App ${classes.app} ${classes.yMandatory}`}>
      {loadAnimation && (
        <div className={classes.note}>
          You are missing out! Please use Chrome or Mozilla to witness the
          magic!!
        </div>
      )}
      <Bubbles />
      <SlidePagination width="100%" components={ProjectList} />
      <Timeline />
    </div>
  );
}

export default App;
