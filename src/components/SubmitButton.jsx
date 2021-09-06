import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import { SKY_BLUE } from "../utils/constants";

const useStyles = makeStyles({
  ButtonStyle: { marginLeft: "1rem", backgroundColor: SKY_BLUE },
});

const SubmitButton = (props) => {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => props.onClick()}
      className={classes.ButtonStyle}
    >
      {props.buttonLabel}
    </Button>
  );
};

export default SubmitButton;
