import { createSelector } from "reselect";

const messagesSelector = (state) => state.messages;

export const getUserName = createSelector(
  [messagesSelector],
  (state) => state.username
);

export const getUserId = createSelector(
  [messagesSelector],
  (state) => state.userId
);

export const getTimeStamp = createSelector(
  [messagesSelector],
  (state) => state.timestamp
);

const messagesListSelector = (state) => state.messagesList;

export const getMessagesList = createSelector(
  [messagesListSelector],
  (state) => state.data
);

export const getIsLoading = createSelector(
  [messagesListSelector],
  (state) => state.isLoading
);
