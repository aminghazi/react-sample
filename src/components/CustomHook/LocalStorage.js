import React from 'react'
import useLocalStorage from '../../hooks/useLocalStorage'

export default function LocalStorage() {

    const [value, setValue] = useLocalStorage('local-data', '')

    return (
        <div>
            <h2>useLocalStorage</h2>
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    )
}

