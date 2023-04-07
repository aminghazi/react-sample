import React, { Component } from 'react'
import { FaEdit } from "react-icons/fa";
import List from './List'
import Color from './Color'
import './index.css'

export default class Note extends Component {

    constructor(props) {
        super(props)

        this.state = {
            colors: [
                "#ffffff",
                "#DBAB66",
                "#8000ff",
                "#ff0000",
                "#f0a7aa",
                "#a8bbd9",
                "#f6eae4"
            ],
            notes: [],
            noteTitle: "",
            inputColor: "#ffffff"
        }

        this.noteTitleHandler = this.noteTitleHandler.bind(this)
        this.inputColorHandler = this.inputColorHandler.bind(this)
        this.resetNoteTitle = this.resetNoteTitle.bind(this)
        this.addNote = this.addNote.bind(this)
    }

    noteTitleHandler(event) {
        this.setState({
            noteTitle: event.target.value
        })
    }

    inputColorHandler(color) {
        this.setState({
            inputColor: color
        })
    }

    resetNoteTitle() {
        this.setState({
            noteTitle: "",
            inputColor: "#ffffff"
        })
    }

    addNote() {
        let newNote = {
            id: this.state.notes.length + 1,
            title: this.state.noteTitle,
            color: this.state.inputColor
        }

        this.setState(prevState => {
            return {
                notes: [...prevState.notes, newNote],
                inputColor: "#fff",
                noteTitle: ""
            }
        })
    }

    render() {
        return (
            <div className='Note-content'>
                <div>
                    <input type="text" value={this.state.noteTitle} onChange={this.noteTitleHandler} style={{ backgroundColor: this.state.inputColor }} />
                    <div className="Color-list">
                        {this.state.colors.map(c => <Color key={c} color={c} onColor={this.inputColorHandler} />)}
                    </div>
                </div>
                <div>
                    <button onClick={this.addNote}>Add</button>
                    <button onClick={this.resetNoteTitle}><FaEdit /></button>
                </div>
                <div className='Note-list'>
                    {this.state.notes.map(n => <List key={n} {...n} />)}
                </div>
            </div>
        )
    }
}
