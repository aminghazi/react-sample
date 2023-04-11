import React, { Component } from 'react'

export default class Synchronous extends Component {
    addNumbers(num1, num2) {
        if (num1 < 0 || num2 < 0) {
            return "Please enter positive numbers only";
        } else {
            let result = num1 + num2;
            return result;
        }
    }
    render() {
        return (
            <div>
                <div>2 + 3 = {this.addNumbers(2, 3)}</div>
                {/* "Please enter positive numbers only" */}
                <div>-2 + 3 = {this.addNumbers(-2, 3)}</div>
            </div>
        )
    }
}
