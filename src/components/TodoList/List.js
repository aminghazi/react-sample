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
        return (
            <div className={`${this.props.completed ? 'completed' : ''}`}>
                <b>{this.props.title}</b>
                <button className="btn-icon" onClick={this.editClickHandler.bind(this, this.props.id)}>
                    <FaCheck/>
                </button>
                <button className="btn-icon" onClick={this.removeClickHandler.bind(this, this.props.id)}>
                    <FaTimesCircle/>
                </button>
            </div>
        )
    }
}
