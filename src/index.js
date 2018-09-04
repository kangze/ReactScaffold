import React from "react";
import ReactDOM from "react-dom";
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { initializeIcons } from '@uifabric/icons';
import { hot } from 'react-hot-loader';

import Header from "./components/_shared/header";
import PublishBox from "./components/PublishBox/PublishBox";
import Layout from "./components/Layout";

require("./index.css");
initializeIcons();

const Index = () => (
    <Fabric>
        <Layout>
            <Header />
            <PublishBox />
        </Layout>
    </Fabric>
);

ReactDOM.render(
    <Index />
    ,
    document.getElementById("react-app")
);

module.hot.accept();