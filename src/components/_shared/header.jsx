import React, { Component } from "react";
import { Icon } from 'office-ui-fabric-react/lib/Icon';

import { CommandBarButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';


require("./header.css");

let childrenMenus = {
    items: [
        {
            key: 'profile',
            text: 'Profile',
            iconProps: { iconName: 'Encryption' },
            href: "http://bing.com"
        },
        {
            key: 'logout',
            text: 'Logout',
            iconProps: { iconName: 'DRM' },
            onClick: function () { alert("logout") }
        }
    ]
};

export default class Header extends Component {

    open() {
        console.log("this");
    }




    render() {
        return (
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm12 ms-hiddenMdUp">
                    {this.render_mobile()}
                </div>
                <div className="ms-Grid-col ms-hiddenSm ms-md12">
                    {this.render_pc()}
                </div>
            </div>
        );
    }

    render_mobile() {

        return (
            <div className="header">
                <div className="header-1">
                    <i className="ms-Icon ms-Icon--Bold" aria-hidden="true" />
                    <span>Money Memory</span>
                </div>
            </div>
        );
    }

    render_pc() {
        
        return (
            <div className="header">
                <div className="header-pc-1">
                    <i className="ms-Icon ms-Icon--Bold" aria-hidden="true" />
                    <span>Money Memory  </span><small>--Log the life with Money</small>
                </div>
                <div className="header-pc-2">
                    <a href="#">Login</a>
                    &nbsp;&nbsp;&nbsp;
                            <a href="#">Logout</a>
                    &nbsp;&nbsp;&nbsp;

                        <CommandBarButton
                        style={{ backgroundColor: "#7d8793" }}
                        className="account"
                        data-automation-id="test"
                        onClick={this.open.bind(this)}
                        text="kangze25@hotmail1.com"
                        menuProps={childrenMenus}
                    />
                    <i className="ms-Icon ms-Icon--Contact" aria-hidden="true" />
                </div>
            </div>
        );
    }
}