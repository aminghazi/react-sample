import React, { Component } from 'react'
import './index.css';

export default class Quiz extends Component {
    constructor(props) {
        super(props)

        this.state = {
            questions: [
                {
                    questionText: "Question 1",
                    answerOptions: [
                        { text: "1", isCorrect: false },
                        { text: "2", isCorrect: true },
                        { text: "3", isCorrect: false },
                    ],
                },
                {
                    questionText: "Question 2",
                    answerOptions: [
                        { text: "1", isCorrect: true },
                        { text: "2", isCorrect: false },
                        { text: "3", isCorrect: false },
                    ],
                },
                {
                    questionText: "Question 3",
                    answerOptions: [
                        { text: "1", isCorrect: false },
                        { text: "2", isCorrect: true },
                        { text: "3", isCorrect: false },
                    ],
                }
            ],
            currectQuestion: 0,
            showScore: false,
            score: 0
        }

    }

    clickHandler(isCorrect) {
        if (isCorrect) {
            this.setState(prevState => {
                return {
                    score: prevState.score + 1
                }
            })
        }
        
        if (this.state.currectQuestion === this.state.questions.length - 1) {
            this.setState({ showScore: true })
        } else {
            this.setState(prevState => {
                return {
                    currectQuestion : prevState.currectQuestion + 1
                }
            })
        }
    }

    render() {
        return (
            <div className="Quiz-content">
                {this.state.showScore ?
                    (<div className="gray-bg">
                        Youre Score is {this.state.score} from {this.state.questions.length}
                    </div>) :(<div className="gray-bg">
                        <div>Question {this.state.currectQuestion + 1} from {this.state.questions.length}</div>
                        <br />
                        <div>
                            <h2>{this.state.questions[this.state.currectQuestion].questionText}</h2>
                            {this.state.questions[this.state.currectQuestion].answerOptions.map(answer => ( 
                                <>
                                    <button onClick={this.clickHandler.bind(this, answer.isCorrect)}>
                                        {answer.text}
                                    </button>
                                    <br/>
                                    <br/>
                                </>
                            ))}
                        </div>
                    </div>)
                }
            </div>
        )
    }
}
