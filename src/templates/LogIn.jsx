import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { db } from "../firebase";
import TextInput from "../components/TextInput";
import SubmitButton from "../components/SubmitButton";
import { LogInAction, FetchMessagesAction } from "../reducks/messages/actions";

const LogIn = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");

  const chats = [];

  const inputUserName = useCallback(
    (event) => {
      setUsername(event.target.value);
    },
    [setUsername]
  );

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
    <div>
      <h2>ユーザー名登録</h2>
      <h5>ユーザ名を登録するとチャットルームに入室できます</h5>
      <div>
        <TextInput
          label="ユーザー名"
          id="outlined-basic"
          type="text"
          required={true}
          value={username}
          onChange={inputUserName}
        />
      </div>
      <SubmitButton
        label="ユーザー名を登録する"
        onClick={() => dispatch(LogInAction({ username: username }))}
      />
    </div>
  );
};

export default LogIn;
