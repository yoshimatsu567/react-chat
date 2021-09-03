import { Button, AppBar, Toolbar, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { LogOutAction } from "../reducks/messages/actions";
import { getUserName } from "../reducks/messages/selector";
import React from "react";

const Header = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const userName = getUserName(selector);

  return (
    <AppBar position="sticky" color="default">
      <Toolbar>
        <Typography variant="h5" style={{ flexGrow: 1 }}>
          チャットアプリ
        </Typography>
        {userName ? (
          <Button
            style={{ color: "#000", textAlign: "right" }}
            color="inherit"
            onClick={() => dispatch(LogOutAction())}
          >
            ログアウト
          </Button>
        ) : (
          ""
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
