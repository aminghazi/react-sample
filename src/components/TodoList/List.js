import React, { Component } from 'react'
import { FaCheck, FaClosedCaptioning } from "react-icons/fa";

export default class List extends Component {
    render() {
        return (
            <div>
                <b>{this.props.title}</b>
                <button>
                    <FaCheck/>
                </button>
                <button>
                    <FaClosedCaptioning/>
                </button>
            </div>
        )
    }
}
