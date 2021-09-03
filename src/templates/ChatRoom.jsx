import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../reducks/messages/operations";
import { getUserName, getMessagesList } from "../reducks/messages/selector";
import { fetchMessageData } from "../reducks/messages/operations";
import { Box } from "@material-ui/core";
import UserMessage from "../components/UserMessage";
import RegisterMessage from "../components/RegisterMessage";
import Form from "../components/Form";

const ChatRoom = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const userName = getUserName(selector);
  const messagesList = getMessagesList(selector);

  // console.log(messagesList);

  const [sentenceValue, setSentenceValue] = useState("");
  const [] = useState(messagesList);

  const inputSentenceValue = useCallback(
    (event) => {
      setSentenceValue(event.target.value);
    },
    [setSentenceValue]
  );

  useEffect(() => {
    fetchMessageData();
  }, [dispatch]);

  return (
    <>
      <Form
        subTitle={`ユーザ名：${userName}`}
        textInputLabel="メッセージ"
        value={sentenceValue}
        onChange={inputSentenceValue}
        buttonLabel="送信"
        onClick={() => [
          dispatch(
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

export default ChatRoom;
