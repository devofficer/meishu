import React from "react";
import ReactDOM from "react-dom/client";

import { ParallaxProvider } from "react-scroll-parallax";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./styles/global.css";
import "./styles/tailwind.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
