import React from "react";
import ReactDom from "react-dom";
import { SpeechProvider } from "@speechly/react-client";

import { Provider } from "./context/context";
import App from "./App";
import "./index.css";

ReactDom.render(
  <SpeechProvider appId="eb385f13-2d27-49d5-bd0e-2726e7c1f926" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
