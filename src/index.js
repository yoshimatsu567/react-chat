import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import createStore from "./reducks/store/store";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { MessagesReducer } from "./reducks/messages/reducers";
import { createMuiTheme } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: '"M PLUS Rounded 2c", "sans-serif"',
  },
});

export const store = createStore(MessagesReducer, applyMiddleware(thunk));

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
