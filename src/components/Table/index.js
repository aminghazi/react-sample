import React, { Component } from 'react'
import Add from './Add'
import FetchTable from './FetchTable'
import './index.css'

export default class Table extends Component {
    render() {
        return (
            <div className="Table-content">
                <Add />
                <FetchTable />
            </div>
        )
    }
}
