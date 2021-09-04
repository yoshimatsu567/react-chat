// import "./App.css";
import { Box } from "@material-ui/core";
import LogIn from "./templates/LogIn";
import ChatRoom from "./templates/ChatRoom";
import { useSelector } from "react-redux";
import { getUserName } from "./reducks/messages/selector";
import React from "react";
import Header from "./components/Header";

const App = () => {
  const selector = useSelector((state) => state);
  const userName = getUserName(selector);

  return (
    <>
      <Header />
      <Box
        style={{
          textAlign: "center",
          backgroundColor: "#ffffff",
          // minHeight: "100vh",
          // flexDirection: "column",
          // alignItems: "center",
          // justifyContent: "center",
          color: "black",
        }}
      >
        {userName ? <ChatRoom /> : <LogIn />}
      </Box>
    </>
  );
};

export default App;
