import React, { Component } from 'react'
import Asynchronous from './Asynchronous'
import Synchronous from './Synchronous'

export default class CallBack extends Component {
    
    render() {
        return (
            <div>
                <img src='./image/synchronous-asynchronous.png' title='synchronous and asynchronous' title='synchronous-asynchronous' />
                <h2>Synchronous</h2>
                <Synchronous/>
                <h2>Asynchronous</h2>
                <Asynchronous/>
            </div>
        )
    }
}
