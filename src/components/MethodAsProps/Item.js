import React, { Component } from 'react'
import './index.css';

export default class Item extends Component {

    removeItem(id) {
        this.props.onRemove(id)
    }

    render() {
        let { id, name } = this.props;
        return (
            <div>
                <button onClick={this.removeItem.bind(this, id)}>clear</button>
                <span>{name}</span>
            </div>
        )
    }
}
