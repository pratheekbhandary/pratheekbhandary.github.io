import React from "react";
import { makeStyles } from "@material-ui/styles";

import "./App.css";
import MostlySane from "./Components/MostlySaneAnime";

const useStyles = makeStyles(theme => ({
  app: {
    background: theme.currentTheme.background,
    color: theme.currentTheme.color
  },
  "@global": {
    body: {
      ...theme.currentTheme
    }
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={`App ${classes.app}`}>
      <MostlySane />
    </div>
  );
}

export default App;
