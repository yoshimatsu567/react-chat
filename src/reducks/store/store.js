import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { MessagesReducer, MessagesListReducer } from "../messages/reducers";
import thunk from "redux-thunk";

export default function createStore() {
  return reduxCreateStore(
    combineReducers({
      messages: MessagesReducer,
      messagesList: MessagesListReducer,
    }),
    applyMiddleware(thunk)
  );
}
