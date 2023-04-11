import React, { Component } from 'react'

export default class Asynchronous extends Component {
    first() {
        console.log("run first")
    }
    secound(callback) {
        setTimeout(() => {
            console.log("run secound")
            // callBack(function (callback)) {
            //     console.log("run callback")
            // }
        }, 3000);
    }
    third() {
        console.log("run third")
    }
    render() {
        return (
            <div>
                {this.first()}
                {this.secound()}
                {this.third()}
                
                <span>console.log("run first")</span><br/>
                <span>console.log("run third")</span><br/>
                <span>console.log("run secound")</span>
            </div>
        )
    }
}
