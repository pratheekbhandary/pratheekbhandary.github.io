import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: "1rem",
    position: "relative",
    display: "inline-block",
    cursor: "pointer",
    outline: "none",
    verticalAlign: "middle",
    textDecoration: "none",
    fontSize: "0.75rem",
    fontFamily: theme.fonts.header,
    fontWeight: 600,
    color: theme.otherPages.buttons.text,
    textTransform: "uppercase",
    padding: "0.4rem 1.5rem",
    background: theme.otherPages.buttons.lightColor,
    border: `2px solid ${theme.otherPages.buttons.border}`,
    borderRadius: "0.75em",
    transformStyle: "preserve-3d",
    transition:
      "transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1)",
    "&:before": {
      position: "absolute",
      content: "''",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: theme.otherPages.buttons.darkColor,
      borderRadius: "inherit",
      boxShadow: `0 0 0 2px ${theme.otherPages.buttons.border}, 0 0.625em 0 0 ${theme.otherPages.buttons.shadow}`,
      transform: "translate3d(0, 0.75em, -1em)",
      transition:
        "transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1)",
    },
    "&:hover": {
      background: theme.otherPages.buttons.color,
      transform: "translate(0, 0.25em)",
      "&:before": {
        boxShadow: `0 0 0 2px ${theme.otherPages.buttons.border}, 0 0.5em 0 0 ${theme.otherPages.buttons.shadow}`,
        transform: "translate3d(0, 0.5em, -1em)",
      },
    },
    "&:active": {
      background: theme.otherPages.buttons.color,
      transform: "translate(0, 0.75em) !important",
      "&:before": {
        boxShadow: `0 0 0 2px ${theme.otherPages.buttons.border}, 0 0 ${theme.otherPages.buttons.shadow} !important`,
        transform: "translate3d(0, 0, -1em) !important",
      },
    },
  },
}));

const Button = ({ children, link }) => {
  const classes = useStyles();
  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a href={link} target="_blank">
      <button className={classes.button}>{children}</button>
    </a>
  );
};

export default Button;
