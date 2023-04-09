import React, { Component } from 'react'

export default class Show extends Component {
    render() {
        let { name, description } = this.props

        return (
            <tr>
                <td>{name}</td>
                <td>{description}</td>
            </tr>
        )
    }
}
