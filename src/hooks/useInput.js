import React, { useState, useEffect } from 'react'

export default function useInput (init) {

    const [value, setValue] = useState(init)

    const resetValue = () => {
        setValue('')
    }

    const binding = {
        value: value,
        onChange: e => {
            setValue(e.target.value)
        }
    }
    
    return[value, binding, resetValue]
}
