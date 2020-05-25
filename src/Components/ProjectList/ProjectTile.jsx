import React from "react";
import { makeStyles } from "@material-ui/styles";
import Button from "../Button";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "nowrap",
    width: "100%",
    margin: "3rem",
    justifyContent: "space-between",
    flexDirection: "column",
    "@media only screen and (min-width: 800px)": {
      flexDirection: "row",
    },
  },
  tile: {
    maxWidth: "400px",
    flex: "1 1 100%",
    textAlign: "center",
    background: "#333c42",
    padding: "6rem 2rem",
    margin: "2rem",
    color: "rgba(255, 255, 255, 0.7)",
    boxShadow: "inset 0 2px 0 rgba(0, 0, 0, 0.08)",
    borderRadius: "5px",
    fontFamily: theme.fonts.body,
    fontSize: "0.75rem",
    "& h2": {
      fontFamily: theme.fonts.header,
      color: "rgba(255, 255, 255, 0.9)",
      marginTop: "0",
      marginBottom: "5px",
      lineHeight: "35px",
    },
    "& p": {
      textAlign: "justify",
      margin: "1em 0",
      "@media (max-width: 500px)": {
        display: "none",
      },
    },
  },
  techUsedContainer: {
    display: "flex",
    justifyContent: "center",
    fontSize: "inherit",
    flexWrap: "wrap",
    "& div": {
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
}));

export default function ProjectTile({ projects }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {projects.map(({ name, repo, description, deployedAt, techUsed }) => (
        <div className={classes.tile}>
          <h2 className={classes.name}>{name}</h2>
          {repo.map((link) => (
            <Button link={link}>GitHub</Button>
          ))}
          {deployedAt && <Button link={deployedAt}>Demo</Button>}
          <p className={classes.description}>{description}</p>
          {techUsed && (
            <div className={classes.techUsedContainer}>
              {techUsed.map((tech) => (
                <div>{tech}</div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
