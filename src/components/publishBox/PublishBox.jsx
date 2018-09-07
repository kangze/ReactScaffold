import React, { Component } from "react";
import { TextField } from 'office-ui-fabric-react/lib/TextField';

//import component
import { Label } from 'office-ui-fabric-react/lib/Label';
import { DefaultButton, IconButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';


export default class PublishBox extends Component {

    handleClick() {
        alert("clicked me!");
    }

    render() {
        return (
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-md2">
                    <Label>I'm a Label</Label>
                </div>
                <div className="ms-Grid-col ms-md8">
                    <TextField label="To Publish My State!!" multiline autoAdjustHeight />
                    <div style={{"backgroundColor":"red","float":"right"}}>
                    <DefaultButton
                        primary
                        data-automation-id="test"
                        text="Create account"
                        onClick={this.handleClick.bind(this)}
                        split={true}
                        aria-roledescription={'split button'}
                        style={{
                            height: '35px', float: "right"
                        }}
                        menuProps={{
                            items: [
                                {
                                    key: 'emailMessage',
                                    text: 'Email message',
                                    iconProps: { iconName: 'Mail' }
                                },
                                {
                                    key: 'calendarEvent',
                                    text: 'Calendar event',
                                    iconProps: { iconName: 'Calendar' }
                                }
                            ]
                        }}
                    />
                    </div>
                </div>
                <div className="ms-Grid-col ms-md2">
                    <Label>I'm a Label</Label>
                </div>
            </div>
        );
    }
}