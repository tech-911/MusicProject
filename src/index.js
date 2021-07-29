import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import Main from "./pages/main_page/main_page";
// import Land from './pages/landing_page/landing_page'
import Join from "./pages/sign_up_page/sign_up_page";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    {/* <Main /> */}
    {/* <Land/> */}
    <Join />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
