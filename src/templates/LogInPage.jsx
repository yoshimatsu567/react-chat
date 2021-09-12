import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UUID from 'uuidjs';
import { LogInAction } from '../reducks/messages/actions';
import { getMessagesList, getIsLoading } from '../reducks/messages/selector';
import { fetchMessageData } from '../reducks/messages/operations';
import InputFormCard from '../components/InputFormCard';
import IsLoading from '../components/IsLoading';
import RegisterMessage from '../components/RegisterMessage';
import { Box } from '@material-ui/core';
import { USERNAME_LIMIT } from '../utils/constants';

const LogInPage = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => {
    return state;
  });
  const messagesList = getMessagesList(selector);
  const isLoading = getIsLoading(selector);
  const [username, setUsername] = useState('');
  const [typing, setTyping] = useState(false);
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

  const onClick = () => {
    return username === ''
      ? alert('ユーザー名が入力されていません')
      : username.length > USERNAME_LIMIT
      ? alert('ユーザー名は15文字以下で設定してください')
      : dispatch(LogInAction({ username: username, userId: userId }));
  };

  const onKeyDown = (e) => {
    return username === '' && e.key === 'Enter'
      ? alert('ユーザー名が入力されていません')
      : username.length > USERNAME_LIMIT && e.key === 'Enter'
      ? alert('ユーザー名は15文字以下で設定してください')
      : e.key === 'Enter' && !typing
      ? [dispatch(LogInAction({ username: username, userId: userId }))]
      : undefined;
  };

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
      <InputFormCard
        subTitle='ユーザー名を登録すると利用できます'
        textInputLabel='ユーザー名'
        value={username}
        onChange={inputUserName}
        buttonLabel='登録'
        onClick={() => onClick()}
        onCompositionStart={() => setTyping(true)}
        onCompositionEnd={() => setTyping(false)}
        onKeyDown={(e) => onKeyDown(e)}
      />
      {isLoading ? <IsLoading /> : <MessagesArea />}
    </>
  );
};

export default LogInPage;
