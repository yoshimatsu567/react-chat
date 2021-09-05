import React from "react";
import ChatApp from "../src/templates/ChatApp";
import GlobalStyle from "./grobalStyles";
import { Box } from "@material-ui/core";

const App = () => {
  return (
    <Box>
      <GlobalStyle />
      <ChatApp />
    </Box>
  );
};

export default App;
