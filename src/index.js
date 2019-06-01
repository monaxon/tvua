import React from "react";
// import { render } from "react-snapshot";
import ReactDOM from 'react-dom';
import App from "App";
import "index.css";
import * as serviceWorker from "serviceWorker";

// render(<App />, document.getElementById("app"));
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();