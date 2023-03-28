import React, { Component } from 'react'
import Item from './Item'
import './index.css';

export default class MethodAsProps extends Component {
    constructor() {
        super()

        this.state = {
            items: [
                {id: 1, name: "one"},
                {id: 2, name: "two"},
                {id: 3, name: "three"},
            ]
        }

        this.itemRemoveHandler = this.itemRemoveHandler.bind(this)
    }

    itemRemoveHandler(id) {
        let newItems = [...this.state.items];

        let mainItem = newItems.findIndex(i => i.id === id)

        newItems.splice(mainItem, 1)

        this.setState({
            items: newItems
        })
    }

    render() {
        return (
            <div className="MethodAsProps-content">
                {this.state.items.map(i => (
                    <Item key={i.id} {...i} onRemove={this.itemRemoveHandler} />
                ))}
            </div>
        )
    }
}
