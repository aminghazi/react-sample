import React, { Component } from 'react'

export default class Event extends Component {

    click(x, y) {
        alert(x + y);
    }

    clickButton(event) {
        // console.log(e)
        // console.log(e.target.innerHTML)
        console.log(event.target.innerHTML)
    }

    render() {
        return (
            <div>
                <button onClick={() => this.click(2, 2)}>Click (Sum 2 + 2)</button>
                <br/><br/>
                <button onClick={(event) => this.clickButton(event)}>Click (log event.Target.innerHTML)</button>
            </div>
        )
    }
}
