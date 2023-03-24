import React, { Component } from 'react'

export default class Event extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            submitted: false
        }
        
        this.submitHandler = this.submitHandler.bind(this)
        this.name = this.nameValidation.bind(this)
        this.email = this.emailValidation.bind(this)
    }

    submitHandler(event) {
        event.preventDefault()

        this.setState({
            submitted: true
        })
    }

    nameValidation(event) {
        this.setState({
            name: event.target.value
        })
    }

    emailValidation(event) {
        this.setState({
            email: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="name" value={this.state.name} onChange={this.nameValidation} />
                    <br/><br/>
                    <input type="email" name="email" value={this.state.email} onChange={this.emailValidation} />
                    <br/><br/>
                    <button type="submit">click</button>
                </form>
            </div>
        )
    }
}
