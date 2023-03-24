import React, { Component } from 'react'

export default class Event extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            submitted: false,
            validForm: false
        }
        
        this.submitHandler = this.submitHandler.bind(this)
        this.nameValidation = this.nameValidation.bind(this)
        this.emailValidation = this.emailValidation.bind(this)
    }

    submitHandler(event) {
        event.preventDefault()

        this.setState({
            submitted: true
        })

        if (this.state.name !== 0 && this.state.email !== 0) {
            this.setState({
                validForm: true
            })

            setTimeout(() => {
                this.setState({
                    validForm: false
                })
            }, 3000)
        }
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
                    {this.state.submitted && this.state.validForm &&
                        <div className="blue">successful</div>}
                    <br/><br/>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.nameValidation} />
                    <br />
                    {this.state.submitted && this.state.name.length === 0 &&
                        <div className="red">please enter name</div>}
                    <br/><br/>
                    <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.emailValidation} />
                    <br />
                    {this.state.submitted && this.state.email.length === 0 &&
                        <div className="red">please enter email</div>}
                    <br/><br/>
                    <button type="submit">click</button>
                </form>
            </div>
        )
    }
}
