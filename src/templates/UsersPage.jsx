import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../reducks/messages/operations';
import {
  getUserName,
  getMessagesList,
  getUserId,
  getIsLoading,
} from '../reducks/messages/selector';
import { fetchMessageData } from '../reducks/messages/operations';
import UserMessage from '../components/UserMessage';
import RegisterMessage from '../components/RegisterMessage';
import InputFormCard from '../components/InputFormCard';
import IsLoading from '../components/IsLoading';
import { Box } from '@material-ui/core';
import { CHARACTER_LIMIT } from '../utils/constants';

const UsersPage = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const userName = getUserName(selector);
  const userId = getUserId(selector);
  const isLoading = getIsLoading(selector);
  const messagesList = getMessagesList(selector);

  const [sentenceValue, setSentenceValue] = useState('');
  const [typing, setTyping] = useState(false);

  const inputSentenceValue = useCallback(
    (e) => {
      setSentenceValue(e.target.value);
    },
    [setSentenceValue]
  );

  useEffect(() => {
    dispatch(fetchMessageData());
  }, [dispatch]);

  const onClick = () => {
    return [
      sentenceValue === ''
        ? alert('メッセージが入力されていません')
        : sentenceValue.length > CHARACTER_LIMIT
        ? alert('メッセージは200文字以下で入力してください')
        : dispatch(
            sendMessage({
              sentence: sentenceValue,
              username: userName,
            })
          ),
      setSentenceValue(''),
    ];
  };

  const onKeyDown = (e) => {
    return sentenceValue === '' && e.key === 'Enter'
      ? alert('メッセージが入力されていません')
      : sentenceValue.length > CHARACTER_LIMIT && e.key === 'Enter'
      ? alert('メッセージは200文字以下で入力してください')
      : e.key === 'Enter' && !typing
      ? [
          dispatch(
            sendMessage({
              sentence: sentenceValue,
              username: userName,
            })
          ),
          setSentenceValue(''),
        ]
      : undefined;
  };

  const MessagesArea = React.memo(() => {
    return (
      <Box>
        {messagesList.map((value) => {
          return (
            <Box key={value.message.postId}>
              {value.message.userId === userId ? (
                <UserMessage
                  sentence={value.message.sentence}
                  username={value.message.username}
                  timestamp={value.message.timestamp}
                />
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
      <InputFormCard
        subTitle={`${userName}さん`}
        subSentence='ようこそ！メッセージを入力し送信できます！'
        textInputLabel='メッセージ'
        value={sentenceValue}
        onChange={inputSentenceValue}
        buttonLabel='送信'
        onClick={() => onClick()}
        onCompositionStart={() => setTyping(true)}
        onCompositionEnd={() => setTyping(false)}
        onKeyDown={(e) => onKeyDown(e)}
      />
      {isLoading ? <IsLoading /> : <MessagesArea />}
    </>
  );
};

export default UsersPage;
