import React, { useMemo } from "react";
import { ThemeProvider } from "@material-ui/styles";
import colorCombos from "./theme/colorCombos.json";
import themes from "./theme/theme.json";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import { getRandomInt } from "./utils";

function Root() {
  const theme = useMemo(() => {
    const allThemes = Object.keys(colorCombos);
    const randomThemePos = getRandomInt(allThemes.length);
    const currentTheme = colorCombos[allThemes[randomThemePos]];
    return {
      palette: {
        type: false ? "dark" : "light",
      },
      currentTheme,
      ...themes,
    };
  }, []);

  return (
    theme && (
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    )
  );
}

export default App;

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
