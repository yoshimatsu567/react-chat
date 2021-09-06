import { createStore, combineReducers, applyMiddleware } from "redux";
import { MessagesReducer, MessagesListReducer } from "../messages/reducers";
import thunk from "redux-thunk";

const allReducers = combineReducers({
  messages: MessagesReducer,
  messagesList: MessagesListReducer,
});

export const store = createStore(allReducers, applyMiddleware(thunk));
