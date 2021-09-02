import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "../components/TextInput";
import SubmitButton from "../components/SubmitButton";
import { sendMessage } from "../reducks/messages/operations";
import { getUserName, getMessagesList } from "../reducks/messages/selector";
import { fetchMessageData } from "../reducks/messages/operations";

const ChatRoom = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const userName = getUserName(selector);
  const messagesList = getMessagesList(selector);

  // console.log(messagesList);

  const [sentenceValue, setSentenceValue] = useState("");
  const [messagesListValue, setMessagesListValue] = useState(messagesList);

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
    <div>
      <h2>チャットルーム</h2>
      <p>メッセージを入力してください</p>
      <div>
        <p>{userName}</p>
        <TextInput
          label="メッセージ"
          id="outlined-basic"
          type="text"
          required={true}
          value={sentenceValue}
          onChange={inputSentenceValue}
        />
      </div>
      <SubmitButton
        label="送信"
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
      <div>
        {messagesList.map((value) => {
          return (
            <div key={value.postId}>
              <p>{value.sentence}</p>
              <p>{value.username}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChatRoom;
