import { db } from '../../firebase';
import dayjs from 'dayjs';
import {
  PostAction,
  FetchMessagesAction,
  StartIsLoadingAction,
} from './actions';

const timeStamp = () => {
  const postedTime = dayjs();
  const year = postedTime.year();
  const month = postedTime.month() + 1;
  const date = postedTime.date();
  let hour = postedTime.hour();
  let minute = postedTime.minute();
  const second = postedTime.second();

  hour = ('00' + hour).slice(-2);
  minute = ('00' + minute).slice(-2);

  const timestamp = {
    postedTime: `${postedTime}`,
    year: year,
    month: month,
    date: date,
    hour: `${hour}`,
    minute: `${minute}`,
    second: second,
  };
  return timestamp;
};

export const sendMessage = ({ sentence, username }) => {
  return async (dispatch, getState) => {
    const state = getState();
    const userId = state.messages.userId;
    const timestamp = timeStamp();

    const data = {
      message: {
        sentence: sentence,
        username: username,
        userId: userId,
        postId: '',
        timestamp: timestamp,
      },
    };

    const postRef = db.ref('messages').push(data);
    const postId = postRef.key;
    (await postRef).update({
      message: {
        sentence: sentence,
        username: username,
        userId: userId,
        postId: postId,
        timestamp: timestamp,
      },
    });

    dispatch(
      PostAction({
        sentence: data.message.sentence,
        username: data.message.username,
        userId: data.message.userId,
        postId: data.message.postId,
        timestamp: data.message.timestamp,
      })
    );
  };
};

export const fetchMessageData = () => {
  return async (dispatch) => {
    dispatch(StartIsLoadingAction({ isLoading: true }));
    db.ref('messages').on('value', (snapshot) => {
      const chats = snapshot.val();
      let chatsData = [];
      for (var key in chats) {
        chatsData.push({
          ...chats[key],
        });
      }
      const reverseChatsData = [...chatsData].reverse();
      dispatch(
        FetchMessagesAction({ data: reverseChatsData, isLoading: false })
      );
    });
  };
};
