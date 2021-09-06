import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import ChatApp from "../src/templates/ChatApp";
import { StylesProvider } from "@material-ui/core/styles";
import { store } from "../src/reducks/store/store";

ReactDOM.render(
  <StylesProvider injectFirst>
    <Provider store={store}>
      <ChatApp />
    </Provider>
  </StylesProvider>,
  document.getElementById("root")
);
