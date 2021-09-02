import { createSelector } from "reselect";

const messagesSelector = (state) => state.messages;

export const getUserName = createSelector(
  [messagesSelector],
  (state) => state.username
);

export const getMessageId = createSelector(
  [messagesSelector],
  (state) => state.messageId
);

const messagesListSelector = (state) => state.messagesList;

export const getMessagesList = createSelector(
  [messagesListSelector],
  (state) => state.data
);
