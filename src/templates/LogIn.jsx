import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../firebase";
import { LogInAction, FetchMessagesAction } from "../reducks/messages/actions";
import { Box } from "@material-ui/core";
import Form from "../components/Form";
import { getMessagesList } from "../reducks/messages/selector";
import UserMessage from "../components/UserMessage";
import RegisterMessage from "../components/RegisterMessage";

const LogIn = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const messagesList = getMessagesList(selector);
  const [username, setUsername] = useState("");

  const chats = [];

  const inputUserName = useCallback(
    (event) => {
      setUsername(event.target.value);
    },
    [setUsername]
  );

  // useEffect(() => {
  //   fetchMessageData();
  // }, [dispatch]);

  useEffect(() => {
    db.ref("messages").on("child_added", (snapshot) => {
      snapshot.forEach((snapshot) => {
        chats.push(snapshot.val());
      });
      dispatch(
        FetchMessagesAction({
          data: chats.reverse(),
        })
      );
    });
  }, []);

  return (
    <>
      <Form
        subTitle="ユーザー名を登録するとメッセージを送信できます"
        textInputLabel="ユーザー名"
        value={username}
        onChange={inputUserName}
        buttonLabel="登録"
        onClick={() => dispatch(LogInAction({ username: username }))}
      />
      <Box>
        {messagesList.map((value) => {
          return (
            <Box key={value.postId}>
              {value.username === "春日" ? (
                <UserMessage
                  sentence={value.sentence}
                  username={value.username}
                />
              ) : (
                <RegisterMessage
                  sentence={value.sentence}
                  username={value.username}
                />
              )}
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default LogIn;
