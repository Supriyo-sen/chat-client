import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import "./index.css";
import ChatProvider from "./Context/ChatProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ChakraProvider>
      <ChatProvider>
        <App />
      </ChatProvider>
    </ChakraProvider>
  </BrowserRouter>,
);
