import React from "react";
import "./MostlySaneAnime.css";
import Bubbles from "../BubblesHeader";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  imageContainer: {
    "&:after": {
      border: `solid ${theme.currentTheme.color}`,
      borderWidth: "0px"
    }
  }
}));

export default function MostlySane() {
  const classes = useStyles();
  return (
    <div className="mostly-sane-container">
      <div className={`one image-container ${classes.imageContainer}`}></div>
      <div className={`two image-container ${classes.imageContainer}`}></div>
      <div className={`three image-container ${classes.imageContainer}`}></div>
      <div className={`four image-container ${classes.imageContainer}`}></div>
      <Bubbles />
    </div>
  );
}
