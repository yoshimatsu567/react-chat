// import "./App.css";
import { Button, AppBar, Toolbar, Typography } from "@material-ui/core";
import styled from "styled-components";
import LogIn from "./templates/LogIn";
import ChatRoom from "./templates/ChatRoom";
import { useDispatch, useSelector } from "react-redux";
import { LogOutAction } from "./reducks/messages/actions";
import { getUserName } from "./reducks/messages/selector";
import React from "react";

// const Form = styled.form`
//   color: "pink";
// `;

const AppDiv = styled.div`
  text-align: center;
  background-color: #ffffff;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
`;

const HeaderButton = styled.div`
  text-align: right;
`;

function App() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const userName = getUserName(selector);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">チャットApp</Typography>
          <HeaderButton>
            {userName ? (
              <Button color="inherit" onClick={() => dispatch(LogOutAction())}>
                ログアウト
              </Button>
            ) : (
              ""
            )}
          </HeaderButton>
        </Toolbar>
      </AppBar>
      <AppDiv>
        {userName ? (
          <ChatRoom />
        ) : (
          <div>
            <p>初めまして</p>
            <LogIn />
          </div>
        )}
      </AppDiv>
    </>
  );
}

export default App;
