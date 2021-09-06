import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LogOutAction } from "../reducks/messages/actions";
import { getUserName } from "../reducks/messages/selector";
import HeaderLogOutButton from "../components/HeaderLogOutButton";
import HeaderMainTitle from "../components/HeaderMainTitle";
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  AppBarStyle: {
    backgroundColor: "white",
  },
});

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const userName = getUserName(selector);

  return (
    <AppBar position="sticky" color="default" className={classes.AppBarStyle}>
      <Toolbar>
        <HeaderMainTitle />
        <HeaderLogOutButton
          userName={userName}
          onClick={() => dispatch(LogOutAction())}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
