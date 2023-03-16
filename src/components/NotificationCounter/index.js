import React, { Component } from 'react'
import './index.css';

export default class NotificationCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            notification: [
                "text 1",
                "text 2",
                "text 3"
            ]
        }
    }
    render() {
        return (
            <div className="NotificationCounter-content">
                {this.state.notification.length > 0 && (
                    <div className="gray-bg">{this.state.notification.length}</div>
                )}
            </div>
        )
    }
}
