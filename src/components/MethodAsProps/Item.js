import React, { Component } from 'react'
import './index.css';

export default class Item extends Component {

    removeItem(id) {
        this.props.onRemove(id)
    }

    render() {
        return (
            <div>
                <button onClick={this.removeItem.bind(this, this.props.id)}>clear</button>
                <span>{this.props.name}</span>
            </div>
        )
    }
}
