import React from 'react';
import { useSelector } from 'react-redux';
import { getUserName } from '../reducks/messages/selector';
import LogIn from './LogInPage';
import ChatRoom from './UsersPage';
import Header from './Header';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { BLACK, WHITE } from '../utils/constants';

const useStyles = makeStyles({
  MainStyle: {
    textAlign: 'center',
    backgroundColor: WHITE,
    color: BLACK,
  },
});

const ChatApp = () => {
  const classes = useStyles();
  const selector = useSelector((state) => state);
  const userName = getUserName(selector);

  return (
    <>
      <Header />
      <Box className={classes.MainStyle}>
        {userName ? <ChatRoom /> : <LogIn />}
      </Box>
    </>
  );
};

export default ChatApp;
