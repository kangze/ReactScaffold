import React from "react";
import ReactDOM from "react-dom";
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { initializeIcons } from '@uifabric/icons';
import { hot } from 'react-hot-loader';

import Header from "./components/_shared/header";
import PublishBox from "./components/PublishBox/PublishBox";
import Layout from "./components/Layout";

// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

import FroalaEditor from 'react-froala-wysiwyg';
import $ from 'jquery';
window.$ = $;


require("./index.css");
initializeIcons();

const Index = () => (
    <Fabric>
        <Layout>
            <Header />
            <PublishBox />
            <FroalaEditor tag='textarea' />
        </Layout>
    </Fabric>
);

ReactDOM.render(
    <Index />
    ,
    document.getElementById("react-app")
);

module.hot.accept();