import React from 'react'
import useConter from '../../hooks/useConter'
import useInput from '../../hooks/useInput'

export default function Input() {

    const [usernameValue, usernameBinding, usernameReset] = useInput('')
    const [passwordValue, passwordBinding, passwordReset] = useInput('')

    const submitHandler = (event) => {
        event.preventDefault()
        alert(`My usename is ${usernameValue}`)
        usernameReset()
        passwordReset()
    }

    return (
        <div>
            <h2>useInput</h2>
            <form onSubmit={submitHandler}>
                <input type="text" {...usernameBinding} />
                <input type="text" {...passwordBinding} />
                <button>Click me</button>
            </form>
        </div>
    )
}

