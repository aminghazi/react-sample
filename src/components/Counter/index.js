import React, { Component } from 'react'
import './index.css';

export default class Counter extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            counter: 0,
            counterColor: 'red'
        }

        this.add = this.add.bind(this)
        this.minus = this.minus.bind(this)
    }

    add() {
        this.setState(previousState => {
            return {
                counter: previousState.counter + 1,
                counterColor: previousState.counter+1 === 0 ? 'red' : 'black'
            }
        })
    }

    minus() {
        this.setState(previousState => {
            return {
                counter: previousState.counter - 1,
                counterColor: previousState.counter-1 === 0 ? 'red' : 'black'
            }
        })
    }

    render() {
        return (
            <div className="Counter-content">
                <button onClick={this.minus}>Minus</button>
                <div className={`${this.state.counterColor}`}>{this.state.counter}</div>
                <button onClick={this.add}>Plus</button>
            </div>
        )
    }
}
