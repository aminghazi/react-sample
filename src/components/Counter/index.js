import React, { Component } from 'react'
import './index.css';

export default class Counter extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            counter: 0
        }

        this.add = this.add.bind(this)
        this.minus = this.minus.bind(this)
    }

    add() {
        this.setState(previousState => {
            return {
                counter: previousState.counter + 1
            }
        })
    }

    minus() {
        this.setState(previousState => {
            return {
                counter: previousState.counter - 1
            }
        })
    }

    render() {
        return (
            <div className="Counter-content">
                <button onClick={this.minus}>Minus</button>
                <div>{this.state.counter}</div>
                <button onClick={this.add}>Plus</button>
            </div>
        )
    }
}
