import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { allReducers } from "../src/reducks/store/store";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { StylesProvider } from "@material-ui/core/styles";
import "typeface-cormorant";

export const store = createStore(allReducers, applyMiddleware(thunk));

ReactDOM.render(
  <StylesProvider injectFirst>
    <Provider store={store}>
      <App />
    </Provider>
  </StylesProvider>,
  document.getElementById("root")
);
