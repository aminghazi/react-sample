import React, { Component } from 'react'

export default class List extends Component {

    clickHandler(id) {
        this.props.onRemove(id)
    }

    render() {
        let { id, title, color } = this.props
        
        return (
            <div
                className="Note-item"
                style={{ backgroundColor: color }}
            >
                <h6>{title}</h6>
                <small
                    onClick={this.clickHandler.bind(this, id)}
                >Remove</small>
            </div>
        )
    }
}
