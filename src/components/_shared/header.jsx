import React, { Component } from "react";
import { Icon } from 'office-ui-fabric-react/lib/Icon';

require("./header.css");
export default class Header extends Component {
    render() {
        return (
            <div className="ms-Grid" dir="ltr">
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
                        <div className="header">
                            <div className="header-1">
                                <i className="ms-Icon ms-Icon--Mail" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}