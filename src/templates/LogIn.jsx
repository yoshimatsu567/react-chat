import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LogInAction } from "../reducks/messages/actions";
import { Box } from "@material-ui/core";
import Form from "../components/Form";
import { getMessagesList, getIsLoading } from "../reducks/messages/selector";
import RegisterMessage from "../components/RegisterMessage";
import UUID from "uuidjs";
import { fetchMessageData } from "../reducks/messages/operations";
import { USERNAME_LIMIT } from "../utils/constants";
import IsLoading from "../components/IsLoading";

const LogIn = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => {
    return state;
  });
  const messagesList = getMessagesList(selector);
  const isLoading = getIsLoading(selector);
  const [username, setUsername] = useState("");
  const userId = UUID.generate();

  useEffect(() => {
    dispatch(fetchMessageData());
  }, [dispatch]);

  const inputUserName = useCallback(
    (e) => {
      setUsername(e.target.value);
    },
    [setUsername]
  );

  const MessagesArea = React.memo(() => {
    return (
      <Box>
        {messagesList.map((value) => {
          return (
            <Box key={value.message.postId}>
              <RegisterMessage
                sentence={value.message.sentence}
                username={value.message.username}
                timestamp={value.message.timestamp}
              />
            </Box>
          );
        })}
      </Box>
    );
  }, []);

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
      {isLoading ? <IsLoading /> : <MessagesArea />}
    </>
  );
};

export default LogIn;
