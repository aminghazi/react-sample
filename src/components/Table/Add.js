import React, { Component } from 'react'
import Show from './Show'

export default class Add extends Component {
    constructor() {
        super()

        this.state = {
            items: [],
            name: '',
            description: '',
        }

        this.nameHandler = this.nameHandler.bind(this)
        this.descriptionHandler = this.descriptionHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }

    nameHandler(event) {
        this.setState({
            name: event.target.value
        })
    }

    descriptionHandler(event) {
        this.setState({
            description: event.target.value
        })
    }

    submitHandler(event) {
        event.preventDefault()

        let { name, description } = this.state

        if (name && description) {
            let newItem = {
                id: this.state.items.length + 1,
                name,
                description
            }

            this.setState({
                items: [...this.state.items, newItem]
            })

            this.setState({
                name: "",
                description: ""
            })
        }

    }
    
    render() {
        return (
            <>
                <form onSubmit={this.submitHandler} autoComplete="off">
                    <div>
                        <label for="name">Name</label>
                        <input type="text" id="name" onChange={this.nameHandler} value={this.state.name} />
                    </div>
                    <br/>
                    <div>
                        <label for="description">Description</label>
                        <input type="text" id="description" onChange={this.descriptionHandler} value={this.state.description} />
                    </div>
                    <br />
                    <input type="submit" value="Add" />
                </form>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.items.map(i => (
                            <Show key={i.id} {...i} />
                        ))}
                    </tbody>
                </table>
            </>
        )
    }
}
