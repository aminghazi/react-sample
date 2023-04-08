import React, { Component } from 'react'
import { FaCheck, FaTimesCircle } from "react-icons/fa";
import './index.css'

export default class List extends Component {

    removeClickHandler(id) {
        this.props.onRemove(id)
    }

    editClickHandler(id) {
        this.props.onEdit(id)
    }

    render() {
        let { id, title, completed } = this.props
        return (
            <div className={`${completed ? 'completed' : ''}`}>
                <b>{title}</b>
                <button className="btn-icon" onClick={this.editClickHandler.bind(this, id)}>
                    <FaCheck/>
                </button>
                <button className="btn-icon" onClick={this.removeClickHandler.bind(this, id)}>
                    <FaTimesCircle/>
                </button>
            </div>
        )
    }
}
