import React from "react";
import ReactDOM from "react-dom";
import "reflect-metadata";

import { setupDependencies } from "packages/core/di/setup";
import { App } from "packages/application/ui/App";
import { reportWebVitals } from "packages/infra/analysis/reportWebVitals";
import "packages/application/assets/styles/index.css";

setupDependencies();

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
