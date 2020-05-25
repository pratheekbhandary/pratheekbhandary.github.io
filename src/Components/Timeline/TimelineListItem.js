import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  timelineBlock: {
    position: "relative",
    margin: "2em 0",
    display: "flex",
    flexDirection: "column",
    "@media only screen and (min-width: 1100px)": {
      alignItems: "flex-end",
    },
  },
  image: {
    position: "absolute",
    left: "12px",
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    boxShadow:
      "0 0 0 4px #7e57c2, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)",
    top: "8px",
    background: "#673ab7",
  },
  content: {
    position: "relative",
    marginLeft: "60px",
    marginRight: "30px",
    background: "#333c42",
    borderRadius: "2px",
    padding: "1em",
    "& h2": {
      color: "rgba(255, 255, 255, 0.9)",
      marginTop: "0",
      marginBottom: "5px",
    },
    "& p": {
      margin: "1em 0",
      lineHeight: "1.6",
      color: "rgba(255, 255, 255, 0.7)",
      //fontSize: "13px",
      fontSize: "0.8125rem",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      top: "18px",
      right: "100%",
      height: "0",
      width: "0",
      border: "7px solid transparent",
      borderRightColor: "#333c42",
    },
    "@media only screen and (min-width: 1100px)": {
      padding: "1.6em",
      width: "36%",
      marginLeft: "0",
      margin: "0 5%",
      "&:before": {
        top: "30px",
        left: "-3%",
        borderColor: "transparent",
        borderRightColor: "#333c42",
      },
    },
    "$timelineBlock:nth-child(even) &": {
      "@media only screen and (min-width: 1100px)": {
        "&": {
          alignSelf: "flex-start",
          marginRight: "0",
          margin: "0 5%",
          "&:before": {
            left: "100%",
            borderColor: "transparent",
            borderLeftColor: "#333c42",
          },
        },
      },
    },
  },
  company: {
    fontFamily: theme.fonts.header,
  },
  description: {
    textAlign: "justify",
    fontFamily: theme.fonts.body,
    "& i": {
      marginRight: "6px",
      color: theme.otherPages.icons.color,
    },
  },
  info: {
    background: "#2b343a",
    fontFamily: theme.fonts.body,
    padding: "5px 10px",
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "12px",
    boxShadow: "inset 0 2px 0 rgba(0, 0, 0, 0.08)",
    borderRadius: "2px",
    "& i": {
      marginRight: "6px",
      color: theme.otherPages.icons.color,
    },
    display: "flex",
    justifyContent: "space-between",
    wrap: "nowrap",
    "@media (max-width: 500px)": {
      flexDirection: "column",
    },
  },

  contentSkills: {
    fontSize: "12px",
    padding: "0",
    marginBottom: "0",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    "& li": {
      background: "#40484d",
      borderRadius: "2px",
      display: "inline-block",
      padding: "2px 10px",
      color: "rgba(255, 255, 255, 0.7)",
      margin: "3px 2px",
      textAlign: "center",
      flexGrow: "1",
    },
  },
  "@media only screen and (min-width: 1100px)": {
    timelineBlock: {
      margin: "4em 0",
    },
    image: {
      width: "30px",
      height: "30px",
      left: "50%",
      marginLeft: "-15px",
      marginTop: "15px",
      /* Force Hardware Acceleration in WebKit */
      "-webkit-transform": "translateZ(0)",
      "-webkit-backface-visibility": "hidden",
    },
  },
}));

export default function TimelineListItem({
  company,
  jobTitle,
  duration,
  description,
  techUsed,
}) {
  const classes = useStyles();
  return (
    <div className={classes.timelineBlock}>
      <div className={classes.image}></div>
      <div className={classes.content}>
        <h2 className={classes.company}>{company}</h2>
        <div className={classes.info}>
          <span className={classes.infoContent}>
            <i className="fa fa-certificate" aria-hidden="true"></i>
            {jobTitle}
          </span>
          <span className={classes.infoContent}>
            <i className="fa fa-calendar" aria-hidden="true"></i>
            {`${duration.from} - ${duration.to}`}
          </span>
        </div>
        {description &&
          description.map((d) => (
            <p className={classes.description}>
              <i className="fa fa-code" aria-hidden="true"></i>
              {d}
            </p>
          ))}
        <ul className={classes.contentSkills}>
          {techUsed && techUsed.map((tech) => <li>{tech}</li>)}
        </ul>
      </div>
    </div>
  );
}
