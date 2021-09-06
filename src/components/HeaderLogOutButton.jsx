import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { BLACK } from "../utils/constants";

const useStyles = makeStyles({
  LogOutButton: { color: BLACK, textAlign: "right" },
});

const HeaderLogOutButton = (props) => {
  const classes = useStyles();

  return (
    <>
      {props.userName ? (
        <Button
          className={classes.LogOutButton}
          color="inherit"
          onClick={() => props.onClick()}
        >
          ログアウト
        </Button>
      ) : null}
    </>
  );
};

export default HeaderLogOutButton;
