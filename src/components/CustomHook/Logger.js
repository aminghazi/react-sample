import React from 'react'
import useUpdateLogger from '../../hooks/useUpdateLogger'

export default function Logger() {

  const [value, setValue] = useUpdateLogger('')

  return (
    <div>
      <h2>useUpdateLogger</h2>
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </div>
  )
}

