import React, { Component } from 'react'

export default class List extends Component {
    render() {
        let { title, color } = this.props
        
        return (
            <div
                className="Note-item"
                style={{ backgroundColor: color }}
            >
                <h6>{title}</h6>
            </div>
        )
    }
}
