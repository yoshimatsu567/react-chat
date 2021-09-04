import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import createStore from "./reducks/store/store";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { MessagesReducer } from "./reducks/messages/reducers";

export const store = createStore(MessagesReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
