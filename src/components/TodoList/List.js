import React, { Component } from 'react'
import { FaCheck, FaRecycle } from "react-icons/fa";

export default class List extends Component {
    render() {
        return (
            <div>
                <h6>{this.props.title}</h6>
                <button>
                    <FaCheck/>
                </button>
                <button>
                    <FaRecycle/>
                </button>
            </div>
        )
    }
}
