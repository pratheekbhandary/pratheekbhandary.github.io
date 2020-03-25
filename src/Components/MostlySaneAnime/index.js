import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  imageContainer: {
    position: "absolute",
    width: "0px",
    height: "0px",
    borderRadius: "50%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    boxShadow:
      "inset 0 0 0 16px rgba(44, 52, 69, 0.4), 0 1px 2px rgba(44, 52, 69, 0.1)",
    fontFamily: `"Karla", sans-serif`,
    animation: `$birth-for-background 1s ease-out forwards,
      $zoom 1s ease-out forwards, $move-circles 6s linear forwards 5 1.5s,
      $birth-for-background 1s ease-out 10s reverse forwards`,
    "&:after": {
      border: `solid ${theme.currentTheme.color}`,
      borderWidth: "0px",
      content: `""`,
      width: "0px",
      height: "0px",
      position: "absolute",
      borderRadius: "100%",
      backgroundColor: "transparent",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      animation: `$birth-for-border 1s ease-out forwards,
      $birth-for-border 1s ease-out 10s reverse forwards`
    }
  },
  mostlySaneContainer: {
    position: "absolute",
    margin: "0px",
    width: "100%",
    height: "100%",
    zIndex: "9000"
  },
  "@keyframes birth-for-border": {
    "0%": {
      borderWidth: "0px",
      width: "0px",
      height: "0px"
    },

    "50%": {
      borderWidth: "125px",
      width: "0px",
      height: "0px"
    },

    "100%": {
      borderWidth: "0px",
      width: "250px",
      height: "250px"
    }
  },
  "@keyframes birth-for-background": {
    "0%": {
      width: "0px",
      height: "0px"
    },
    "40%": {
      width: "250px",
      height: "250px"
    },
    "100%": {
      width: "250px",
      height: "250px"
    }
  },
  "@keyframes zoom": {
    "0%": {
      transform: "scale(1, 1) translate(-50%,-50%)",
      top: "50%",
      left: "50%"
    },
    "50%": {
      transform: "scale(1.5, 1.5) translate(-25%,-25%)",
      top: "50%",
      left: "50%"
    },
    "100%": {
      transform: "scale(1, 1) translate(-50%,-50%)",
      top: "50%",
      left: "50%"
    }
  },

  "@keyframes move-circles": {
    "0%": {
      transform: "translate(-50%,-50%) scale(1, 1)",
      filter: "none",
      zIndex: "2000",
      left: "50%"
    },

    "25%": {
      transform: "translate(-50%,-50%) scale(0.98, 0.98)",
      filter: "blur(1px)",
      zIndex: "1000",
      left: "10%"
    },
    "30%": {
      zIndex: "-1000"
    },
    "50%": {
      transform: `translate(-50%,-50%) scale(0.9, 0.9)`,
      filter: `blur(6px)`,
      left: "50%"
    },
    "70%": {
      zIndex: "-1000"
    },
    "75%": {
      transform: `translate(-50%,-50%) scale(0.98, 0.98)`,
      filter: `blur(0px)`,
      zIndex: `1000`,
      left: "90%"
    },
    "100%": {
      transform: `translate(-50%,-50%) scale(1, 1)`,
      filter: `none`,
      zIndex: `2000`,
      left: "50%"
    }
  },

  one: {
    background: `url("https://res.cloudinary.com/pratheekbhandary/image/upload/v1584881492/IMG_7644_xxhorx.jpg")
      no-repeat center center`,
    backgroundSize: `cover`
  },
  two: {
    background: `url("https://res.cloudinary.com/pratheekbhandary/image/upload/e_anti_removal,q_31:420,r_0/v1584881155/IMG_0801_dywerg.jpg")
      no-repeat center center`,
    backgroundSize: `cover`,
    animationDelay: `1.5s, 1.5s, 3s, 10s`,
    "&:after": {
      animationDelay: `1.5s, 10s`
    }
  },
  three: {
    background: `url("https://res.cloudinary.com/pratheekbhandary/image/upload/q_41/v1584880943/17268222_1287822954599420_8590448407527555072_n_cqi9cu.jpg")
      no-repeat center center`,
    backgroundSize: `cover`,
    animationDelay: `3s, 3s, 4.5s, 10s`,
    "&:after": {
      animationDelay: `3s, 10s`
    }
  },

  four: {
    background: `url("https://res.cloudinary.com/pratheekbhandary/image/upload/e_contrast:0,q_36/v1584881119/IMG_0891_1_wgsal0.jpg")
      no-repeat center center`,
    backgroundSize: `cover`,
    animationDelay: `4.5s, 4.5s, 6s, 10s`,
    "&:after": {
      animationDelay: `4.5s, 10s`
    }
  }
}));

export default function MostlySane() {
  const classes = useStyles();

  return (
    <div className={classes.mostlySaneContainer}>
      <div className={`${classes.one} ${classes.imageContainer}`}></div>
      <div className={`${classes.two} ${classes.imageContainer}`}></div>
      <div className={`${classes.three} ${classes.imageContainer}`}></div>
      <div className={`${classes.four} ${classes.imageContainer}`}></div>
    </div>
  );
}
