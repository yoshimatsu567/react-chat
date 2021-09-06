import { Button, AppBar, Toolbar, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { LogOutAction } from "../reducks/messages/actions";
import { getUserName } from "../reducks/messages/selector";
import React from "react";
import { BLACK } from "../utils/constants";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  AppBarStyle: {
    backgroundColor: "white",
  },
  MainTitle: {
    flexGrow: 1,
  },
  LogOutButton: { color: BLACK, textAlign: "right" },
});

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const userName = getUserName(selector);

  return (
    <AppBar position="sticky" color="default" className={classes.AppBarStyle}>
      <Toolbar>
        <Typography variant="h5" className={classes.MainTitle}>
          チャットアプリ
        </Typography>
        {userName ? (
          <Button
            className={classes.LogOutButton}
            color="inherit"
            onClick={() => dispatch(LogOutAction())}
          >
            ログアウト
          </Button>
        ) : null}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
