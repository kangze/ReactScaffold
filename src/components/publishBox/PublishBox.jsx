import React, { Component } from "react";

//import component
import { Label } from 'office-ui-fabric-react/lib/Label';

export default class PublishBox extends Component {
    render() {
        return (
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-hiddenSm ms-md12">
                    <Label>I'm a Label</Label>
                </div>
            </div>
        );
    }
}