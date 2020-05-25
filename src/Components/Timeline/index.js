import React from "react";
import { makeStyles } from "@material-ui/styles";
import TimelineListItem from "./TimelineListItem";

import experience from "./timeline.json";
const useStyles = makeStyles((theme) => ({
  header: {
    position: "absolute",
    fontFamily: "Ceviche One, cursive",
    color: "inherit",
    writingMode: "vertical-lr",
    transform: "rotate(180deg)translateX(82%)",
    fontSize: "2rem",
    textShadow: "0px 2px 40px #00000020, 0px 2px 5px #00000030",
    "@media only screen and (min-width: 1100px)": {
      // transform: "rotate(-90deg)",
      // transformOrigin: "100% 0",
      left: 0,
      fontSize: "4rem",
      padding: "2rem",
      fontWeight: "400",
      transform: "rotate(180deg)translateX(68%)",
      // font-family: "Black Ops One", cursive;
      // font-family: "Sigmar One", cursive;
      // font-family: "Kristi", cursive;
      // font-family: "Mr Dafoe", cursive;Oswald
    },
  },
  cdContainer: {
    width: "90%",
    maxWidth: "1080px",
    maxHeight: "100vh",
    margin: "0 auto",
    background: "#2B343A",
    padding: "0",
    borderRadius: "2px",
  },
  cdTimeline: {
    position: "relative",
    "&:before": {
      content: "''",
      position: "absolute",
      top: "0",
      left: "25px",
      height: "100%",
      width: "4px",
      background: "#7E57C2",
      marginRight: "2px",
    },
  },
  "@media only screen and (min-width: 1100px)": {
    cdTimeline: {
      "&:before": {
        left: "50%",
        marginLeft: "-2px",
      },
    },
  },
  timelineContainer: {
    padding: 0,
    maxWidth: "inherit",
    maxHeight: "inherit",
    overflowY: "scroll",
  },
}));
export default function Timeline() {
  const classes = useStyles();
  return (
    <div className={`${classes.cdTimeline} ${classes.cdContainer}`}>
      <div className={classes.header}>Timeline</div>
      <div className={classes.timelineContainer}>
        {experience &&
          experience.jobs.map(({ ...props }) => (
            <TimelineListItem {...props} type={"work"} />
          ))}
      </div>
    </div>
  );
}
