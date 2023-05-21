import React from 'react'
import Counter from './Counter'
import Logger from './Logger'
import Fetch from './Fetch'
import LocalStorage from './LocalStorage'
import Input from './Input'

export default function CustomHook() {
  return (
    <div>
      <Logger />
      
      <Counter />
      
      <Fetch />
      
      <LocalStorage />

      <Input />
    </div>
  )
}

