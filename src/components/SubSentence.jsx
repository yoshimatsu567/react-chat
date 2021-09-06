import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  SubSentence: {
    paddingBottom: "1rem",
  },
});

const SubSentence = (props) => {
  const classes = useStyles();

  return (
    <>
      {props.isMobileSize ? (
        <Typography variant="subtitle2" className={classes.SubSentence}>
          {props.subSentence}
        </Typography>
      ) : (
        <Typography className={classes.SubSentence}>
          {props.subSentence}
        </Typography>
      )}
    </>
  );
};

export default SubSentence;
