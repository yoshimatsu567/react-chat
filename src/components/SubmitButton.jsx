import React from "react";
import Button from "@material-ui/core/Button";
import { SKY_BLUE } from "../utils/constants";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  ButtonStyle: { marginLeft: "1rem", backgroundColor: SKY_BLUE },
});

const SubmitButton = React.memo((props) => {
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
});

export default React.memo(SubmitButton);
