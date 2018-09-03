import React from "react";
import ReactDOM from "react-dom";
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import Header from "./components/_shared/header";
import { initializeIcons } from '@uifabric/icons';
import { hot } from 'react-hot-loader';

require("./index.css");
initializeIcons();

const Index = () => (
    <Fabric>
        <Header />
    </Fabric>
);

ReactDOM.render(
    <Index/>
    ,
    document.getElementById("react-app")
);

module.hot.accept();