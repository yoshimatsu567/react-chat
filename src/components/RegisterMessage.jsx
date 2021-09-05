import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { WHITE, LIGHT_GRAY, GRAY } from "../utils/constants";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  GridContainer: {
    backgroundColor: WHITE,
    marginBottom: "0.5rem",
    justifyContent: "flex-start",
  },
  GridItem: {
    textAlign: "left",
    backgroundColor: LIGHT_GRAY,
    padding: "1rem",
    borderRadius: "0.5rem",
  },
  SentenceStyle: {
    fontSize: "0.8rem",
    wordWrap: "break-word",
  },
  UsernameStyle: {
    fontSize: "0.1rem",
    textAlign: "right",
  },
  TimeStyle: {
    fontSize: "0.6rem",
    color: GRAY,
    alignSelf: "flex-end",
    paddingLeft: "0.5rem",
  },
});

const RegisterMessage = React.memo((props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.GridContainer}>
      <Grid item className={classes.GridItem} xs={5}>
        <Typography className={classes.SentenceStyle}>
          {props.sentence}
        </Typography>
        <Typography className={classes.UsernameStyle}>
          {props.username}
        </Typography>
      </Grid>
      <Typography className={classes.TimeStyle}>
        {props.timestamp.minute < 1
          ? "数秒前"
          : `${props.timestamp.month}/${props.timestamp.date} ${props.timestamp.hour}:${props.timestamp.minute}`}
      </Typography>
    </Grid>
  );
});

export default React.memo(RegisterMessage);
