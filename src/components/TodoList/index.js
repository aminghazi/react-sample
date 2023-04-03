import React, { Component } from 'react'
import { FaPlus } from "react-icons/fa";
import './index.css'
import List from './List';

export default class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            todoTitle: "",
            status: "all"
        }

        this.todoTitleHandler = this.todoTitleHandler.bind(this)
    }

    todoTitleHandler(event) {
        this.setState({
            todoTitle: event.target.value
        })
    }

    addTodo(event) {
        event.preventDefault()

        let newTodo = {
            id: this.state.todos.length + 1,
            title: this.state.todoTitle,
            completed: false
        }

        this.setState(prevState => {
            return {
                todos: [...this.state.todos, newTodo]
            }
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addTodo}>
                    <div>
                        <input type="text" value={this.state.todoTitle} onChange={this.todoTitleHandler} />
                        <button type="submit">
                            <FaPlus />
                        </button>
                    </div>
                    <br/>
                    <select>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">unCompleted</option>
                    </select>
                </form>
                <div className="Todolist-list">
                    {this.state.todos.map(todo => (
                        <List {...todo} />
                    ))}
                </div>
            </div>
        )
    }
}
