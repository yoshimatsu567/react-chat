export const LOG_IN = "LOG_IN";

export const LogInAction = (messageState) => {
  return {
    type: "LOG_IN",
    payload: {
      username: messageState.username,
    },
  };
};

export const LOG_OUT = "LOG_OUT";

export const LogOutAction = () => {
  return {
    type: "LOG_OUT",
    payload: {
      username: "",
    },
  };
};

export const POST = "POST";

export const PostAction = (messageState) => {
  return {
    type: "POST",
    payload: {
      sentence: messageState.sentence,
      username: messageState.username,
      postId: messageState.postId,
    },
  };
};

export const FETCH_MESSAGES = "FETCH_MESSAGES";

export const FetchMessagesAction = (messagesListState) => {
  return {
    type: "FETCH_MESSAGES",
    payload: {
      data: messagesListState.data,
    },
  };
};
