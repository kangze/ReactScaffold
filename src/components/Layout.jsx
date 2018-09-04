import React, { Component } from 'react';


export default class Layout extends Component {




    render() {
        return (
            <div className="ms-Grid" dir="ltr">
                {this.props.children}
            </div>
        );
    }
}