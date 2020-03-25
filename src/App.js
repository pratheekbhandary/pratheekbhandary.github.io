import React, { useEffect, useState, useMemo } from "react";
import { makeStyles } from "@material-ui/styles";

import "./App.css";
import MostlySane from "./Components/MostlySaneAnime";
import Bubbles from "./Components/BubblesHeader";
import { isChrome, isFirefox } from "./utils";

const useStyles = makeStyles(theme => ({
  app: {
    background: theme.currentTheme.background,
    color: theme.currentTheme.color
  },
  "@global": {
    body: {
      ...theme.currentTheme
    }
  },
  note: {
    position: "fixed",
    top: "1%",
    right: "1%",
    fontSize: "1rem",
    color: theme.currentTheme.background,
    background: theme.currentTheme.color,
    padding: "2px 5px",
    borderRadius: "5px"
  }
}));

function App() {
  const classes = useStyles();
  const [loadAnimation, setLoadtAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadtAnimation(false);
    }, 11000);
    return () => clearTimeout(timer);
  }, [setLoadtAnimation]);

  const isChromeOrMozilla = useMemo(() => isChrome() || isFirefox(), []);

  if (loadAnimation && isChromeOrMozilla) {
    return (
      <div className={`App ${classes.app}`}>
        <MostlySane />
      </div>
    );
  }

  return (
    <div className={`App ${classes.app}`}>
      {loadAnimation && (
        <div className={classes.note}>
          You are missing out! Please use Chrome or Mozilla to witness the
          magic!!{" "}
        </div>
      )}
      <Bubbles />
    </div>
  );
}

export default App;
