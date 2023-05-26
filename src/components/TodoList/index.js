import React, { Component } from 'react'
import { FaPlus } from "react-icons/fa";
import './index.css'
import List from './List';
import TodoTwo from './TodoTwo';
import TodoThree from './TodoThree';

export default class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            todoTitle: "",
            status: "all"
        }

        this.todoTitleHandler = this.todoTitleHandler.bind(this)
        this.addTodo = this.addTodo.bind(this)
        this.removeTodo = this.removeTodo.bind(this)
        this.editTodo = this.editTodo.bind(this)
        this.statusHandler = this.statusHandler.bind(this)
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
                todos: [...prevState.todos, newTodo],
                todoTitle: ""
            }
        })
    }

    removeTodo(id) {
        let newTodo = this.state.todos.filter(t => t.id !== id)

        this.setState({
            todos: newTodo
        })
    }

    editTodo(id) {
        let newTodo = [...this.state.todos]
        
        newTodo.forEach(t => {
            if (t.id === id) {
                t.completed = !t.completed
            }
        })

        this.setState({
            todos: newTodo
        })
    }

    statusHandler(event) {
        this.setState({
            status: event.target.value
        })
    }

    render() {
        return (
            <>
                <form onSubmit={this.addTodo} autoComplete="off">
                    <div>
                        <input type="text" value={this.state.todoTitle} onChange={this.todoTitleHandler} />
                        <button type="submit">
                            <FaPlus />
                        </button>
                    </div>
                    <br/>
                    <select onChange={this.statusHandler}>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">unCompleted</option>
                    </select>
                </form>
                <div className="Todolist-list">
                    {this.state.status === "completed" && this.state.todos.filter(todo => todo.completed).map(todo => (
                        <List key={todo.id} {...todo} onRemove={this.removeTodo} onEdit={this.editTodo} />
                    ))}
                    {this.state.status === "uncompleted" && this.state.todos.filter(todo => !todo.completed).map(todo => (
                        <List key={todo.id} {...todo} onRemove={this.removeTodo} onEdit={this.editTodo} />
                    ))}
                    {this.state.status === "all" && this.state.todos.map(todo => (
                        <List key={todo.id} {...todo} onRemove={this.removeTodo} onEdit={this.editTodo} />
                    ))}
                </div>

                <br/>

                <TodoTwo />
                
                <br/>
                
                <TodoThree />
            </>
        )
    }
}
