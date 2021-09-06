import { combineReducers } from "redux";
import { MessagesReducer, MessagesListReducer } from "../messages/reducers";

export const allReducers = combineReducers({
  messages: MessagesReducer,
  messagesList: MessagesListReducer,
});
