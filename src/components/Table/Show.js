import React, { Component } from 'react'

export default class Show extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.description}</td>
            </tr>
        )
    }
}
