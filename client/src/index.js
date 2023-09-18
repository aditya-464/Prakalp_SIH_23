import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = extendTheme({
  colors: {
    prakalp: {
      0: "transparent", // transparent color
      1: "#03C988", // base green color
      2: "#D9D9D9", // grey color
      3: "#FF4162", // pink color
      4: "#FAFF00", // yellow color
    }
  }
});
root.render(
  <React.StrictMode>
    <Router>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Router>
  </React.StrictMode>
);
