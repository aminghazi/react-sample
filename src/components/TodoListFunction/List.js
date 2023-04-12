import React from 'react'
import { FaCheck, FaTimesCircle } from "react-icons/fa";
import './index.css'

export default function List (props) {

    const removeClickHandler = (id) => {
        props.onRemove(id)
    }

    const editClickHandler = (id) => {
        props.onEdit(id)
    }

    let { id, title, completed } = props
    return (
        <div className={`${completed ? 'completed' : ''}`}>
            <b>{title}</b>
            <button className="btn-icon" onClick={() => editClickHandler(id)}>
                <FaCheck/>
            </button>
            <button className="btn-icon" onClick={() => removeClickHandler(id)}>
                <FaTimesCircle/>
            </button>
        </div>
    )
}
