import React, { Component } from "react";
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

//require("./header.css")
export default class Header extends Component {
    render() {
        return (
            <Fabric>
                <DefaultButton>I am a button.</DefaultButton>
            </Fabric>
        );
    }
}