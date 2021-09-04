import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../reducks/messages/operations";
import {
  getUserName,
  getMessagesList,
  getUserId,
} from "../reducks/messages/selector";
import { fetchMessageData } from "../reducks/messages/operations";
import { Box } from "@material-ui/core";
import UserMessage from "../components/UserMessage";
import RegisterMessage from "../components/RegisterMessage";
import Form from "../components/Form";
import { CHARACTER_LIMIT } from "../utils/constants";

const ChatRoom = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const userName = getUserName(selector);
  const userId = getUserId(selector);
  const messagesList = getMessagesList(selector);

  const [sentenceValue, setSentenceValue] = useState("");

  const inputSentenceValue = useCallback(
    (e) => {
      setSentenceValue(e.target.value);
    },
    [setSentenceValue]
  );

  // useEffect(() => {
  //   fetchMessageData();
  // }, [dispatch]);

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
          fetchMessageData(),
        ]}
      />
      <Box>
        {messagesList.map((value) => {
          return (
            <Box key={value.postId}>
              {value.userId === userId ? (
                <Box>
                  <UserMessage
                    sentence={value.sentence}
                    username={value.username}
                    timestamp={value.timestamp}
                  />
                </Box>
              ) : (
                <RegisterMessage
                  sentence={value.sentence}
                  username={value.username}
                  timestamp={value.timestamp}
                />
              )}
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default ChatRoom;
