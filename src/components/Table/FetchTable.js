import React, { Component } from 'react'

export default class FetchTable extends Component {

    constructor() {
        super()

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    users: data
                })
            })
    }

    render() {
        return (
            <>
            {this.state.users.length ?
                 <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(u => (
                            <tr>
                                <td>{u.id}</td>
                                <td>{u.name}</td>
                                <td>{u.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                : "loading..."
                }
            </>
        )
    }
}
