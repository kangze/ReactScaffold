import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import { hot } from 'react-hot-loader';

// let App=hot(module)(Header);

// ReactDOM.render(
//     <App/>,
//     document.getElementById("react-app")
// );

ReactDOM.render(
    <Header />,
    document.getElementById("react-app") 
);