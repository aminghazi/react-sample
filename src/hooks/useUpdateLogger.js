import React, { useState, useEffect } from 'react'

export default function useUpdateLogger (title) {

    const [value, setValue] = useState(title)

    useEffect(() => {
      console.log(value)
    })

    return[value, setValue]
}
