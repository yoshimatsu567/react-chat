import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { GRAY, WHITE, SKY_BLUE } from "../utils/constants";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  GridContainer: {
    backgroundColor: WHITE,
    marginBottom: "0.5rem",
    justifyContent: "flex-end",
  },
  GridItem: {
    backgroundColor: SKY_BLUE,
    textAlign: "left",
    padding: "1rem",
    borderRadius: "0.5rem",
  },
  SentenceStyle: {
    color: WHITE,
    fontSize: "0.8rem",
    wordWrap: "break-word",
  },
  UsernameStyle: {
    color: WHITE,
    fontSize: "0.1rem",
    textAlign: "right",
  },
  TimeStyle: {
    fontSize: "0.6rem",
    color: GRAY,
    alignSelf: "flex-end",
    paddingRight: "0.5rem",
  },
});

const UserMessage = React.memo((props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.GridContainer}>
      <Typography className={classes.TimeStyle}>
        {props.timestamp.minute < 1
          ? "数秒前"
          : `${props.timestamp.month}/${props.timestamp.date} ${props.timestamp.hour}:
        ${props.timestamp.minute}`}
      </Typography>
      <Grid item className={classes.GridItem} xs={5}>
        <Typography className={classes.SentenceStyle}>
          {props.sentence}
        </Typography>
        <Typography className={classes.UsernameStyle}>
          {props.username}
        </Typography>
      </Grid>
    </Grid>
  );
});

export default React.memo(UserMessage);
