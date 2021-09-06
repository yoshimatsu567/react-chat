import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../reducks/messages/operations";
import {
  getUserName,
  getMessagesList,
  getUserId,
  getIsLoading,
} from "../reducks/messages/selector";
import { fetchMessageData } from "../reducks/messages/operations";
import { Box } from "@material-ui/core";
import UserMessage from "../components/UserMessage";
import RegisterMessage from "../components/RegisterMessage";
import Form from "../components/Form";
import { CHARACTER_LIMIT } from "../utils/constants";
import IsLoading from "../components/IsLoading";

const ChatRoom = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const userName = getUserName(selector);
  const userId = getUserId(selector);
  const isLoading = getIsLoading(selector);
  const messagesList = getMessagesList(selector);

  const [sentenceValue, setSentenceValue] = useState("");

  const inputSentenceValue = useCallback(
    (e) => {
      setSentenceValue(e.target.value);
    },
    [setSentenceValue]
  );

  useEffect(() => {
    dispatch(fetchMessageData());
  }, [dispatch]);

  const MessagesArea = React.memo(() => {
    return (
      <Box>
        {messagesList.map((value) => {
          return (
            <Box key={value.postId}>
              {value.message.userId === userId ? (
                <Box>
                  <UserMessage
                    sentence={value.message.sentence}
                    username={value.message.username}
                    timestamp={value.message.timestamp}
                  />
                </Box>
              ) : (
                <RegisterMessage
                  sentence={value.message.sentence}
                  username={value.message.username}
                  timestamp={value.message.timestamp}
                />
              )}
            </Box>
          );
        })}
      </Box>
    );
  }, [messagesList]);

  return (
    <>
      <Form
        subTitle={`ユーザー名：${userName}`}
        subSentence="ようこそ！メッセージを入力し送信できます！"
        textInputLabel="メッセージ"
        value={sentenceValue}
        onChange={inputSentenceValue}
        buttonLabel="送信"
        onClick={() => [
          sentenceValue === ""
            ? alert("メッセージが入力されていません")
            : sentenceValue.length > CHARACTER_LIMIT
            ? alert("メッセージは200文字以下で入力してください")
            : dispatch(
                sendMessage({
                  sentence: sentenceValue,
                  username: userName,
                })
              ),
          setSentenceValue(""),
        ]}
      />
      {isLoading ? <IsLoading /> : <MessagesArea />}
    </>
  );
};

export default ChatRoom;
