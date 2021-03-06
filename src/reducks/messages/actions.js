export const LOG_IN = 'LOG_IN';

export const LogInAction = (messageState) => {
  return {
    type: 'LOG_IN',
    payload: {
      username: messageState.username,
      userId: messageState.userId,
    },
  };
};

export const LOG_OUT = 'LOG_OUT';

export const LogOutAction = () => {
  return {
    type: 'LOG_OUT',
    payload: {
      username: '',
      userId: '',
    },
  };
};

export const POST = 'POST';

export const PostAction = (messageState) => {
  return {
    type: 'POST',
    payload: {
      sentence: messageState.sentence,
      username: messageState.username,
      userId: messageState.userId,
      postId: messageState.postId,
      timestamp: messageState.timestamp,
    },
  };
};

export const START_IS_LOADING = 'START_IS_LOADING';

export const StartIsLoadingAction = (messagesListState) => {
  return {
    type: 'START_IS_LOADING',
    payload: {
      isLoading: messagesListState.isLoading,
    },
  };
};

export const FETCH_MESSAGES = 'FETCH_MESSAGES';

export const FetchMessagesAction = (messagesListState) => {
  return {
    type: 'FETCH_MESSAGES',
    payload: {
      isLoading: messagesListState.isLoading,
      data: messagesListState.data,
    },
  };
};
