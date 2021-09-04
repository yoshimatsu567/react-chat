import React from "react";
import { useSelector } from "react-redux";
import LogIn from "../templates/LogIn";
import ChatRoom from "../templates/ChatRoom";
import { getUserName } from "../reducks/messages/selector";
import Header from "../components/Header";
import { BLACK, WHITE } from "../utils/constants";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  MainStyle: {
    textAlign: "center",
    backgroundColor: WHITE,
    color: BLACK,
  },
});

const ChatApp = () => {
  const classes = useStyles();
  const selector = useSelector((state) => state);
  const userName = getUserName(selector);

  return (
    <>
      <Header />
      <Box className={classes.MainStyle}>
        {userName ? <ChatRoom /> : <LogIn />}
      </Box>
    </>
  );
};

export default ChatApp;
