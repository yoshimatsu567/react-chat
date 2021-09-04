import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../firebase";
import { LogInAction, FetchMessagesAction } from "../reducks/messages/actions";
import { Box } from "@material-ui/core";
import Form from "../components/Form";
import { getMessagesList } from "../reducks/messages/selector";
import RegisterMessage from "../components/RegisterMessage";
import UUID from "uuidjs";
import { useMemo } from "react";
import { fetchMessageData } from "../reducks/messages/operations";
import { USERNAME_LIMIT } from "../utils/constants";

const LogIn = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const messagesList = getMessagesList(selector);
  const [username, setUsername] = useState("");
  // console.log(messagesList);

  const userId = UUID.generate();
  // console.log(userId);

  const chats = [];

  const inputUserName = useCallback(
    (e) => {
      setUsername(e.target.value);
    },
    [setUsername]
  );

  useEffect(() => {
    db.ref("messages").on("child_added", (snapshot) => {
      snapshot.forEach((snapshot) => {
        chats.push(snapshot.val());
      });
      const reverseChats = [...chats].reverse();
      dispatch(
        FetchMessagesAction({
          data: reverseChats,
        })
      );
    });
  }, [dispatch]);

  return (
    <>
      <Form
        subTitle="ユーザー名を登録すると利用できます"
        textInputLabel="ユーザー名"
        value={username}
        onChange={inputUserName}
        buttonLabel="登録"
        onClick={() =>
          username === ""
            ? alert("ユーザー名が入力されていません")
            : username.length > USERNAME_LIMIT
            ? alert("ユーザー名は15文字以下で設定してください")
            : dispatch(LogInAction({ username: username, userId: userId }))
        }
      />
      <Box>
        {messagesList.map((value) => {
          return (
            <Box key={value.postId}>
              <RegisterMessage
                sentence={value.sentence}
                username={value.username}
                timestamp={value.timestamp}
              />
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default LogIn;
