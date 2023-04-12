import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import './index.css'
import List from './List';

export default function TodoList () {

    const [todos, setTodos] = useState([])
    const [todoTitle, setTodoTitle] = useState("")
    const [status, setStatus] = useState("all")

    const todoTitleHandler = (event) => {
        setTodoTitle(event.target.value)
    }

    const addTodo = (event) => {
        event.preventDefault()

        let newTodo = {
            id: todos.length + 1,
            title: todoTitle,
            completed: false
        }

        setTodos(prevState => {
            return [...prevState, newTodo]
        })

        setTodoTitle("")
    }

    const removeTodo = (id) => {
        let newTodo = todos.filter(t => t.id !== id)

        setTodos(newTodo)
    }

    const editTodo = (id) => {
        let newTodo = [...todos]
        
        newTodo.forEach(t => {
            if (t.id === id) {
                t.completed = !t.completed
            }
        })

        setTodos(newTodo)
    }

    const statusHandler = (event) => {
        setStatus(event.target.value)
    }

    return (
        <>
            <form onSubmit={addTodo} autoComplete="off">
                <div>
                    <input type="text" value={todoTitle} onChange={todoTitleHandler} />
                    <button type="submit">
                        <FaPlus />
                    </button>
                </div>
                <br/>
                <select onChange={statusHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">unCompleted</option>
                </select>
            </form>
            <div className="Todolist-list">
                {status === "completed" && todos.filter(todo => todo.completed).map(todo => (
                    <List key={todo.id} {...todo} onRemove={removeTodo} onEdit={editTodo} />
                ))}
                {status === "uncompleted" && todos.filter(todo => !todo.completed).map(todo => (
                    <List key={todo.id} {...todo} onRemove={removeTodo} onEdit={editTodo} />
                ))}
                {status === "all" && todos.map(todo => (
                    <List key={todo.id} {...todo} onRemove={removeTodo} onEdit={editTodo} />
                ))}
            </div>
        </>
    )
}
