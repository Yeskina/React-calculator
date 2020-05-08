import React from 'react'

const InputPanel = ({ text, result }) => (
  <div className="container">
    <div className="first">{result}</div>
    <div>{text}</div>
  </div>
)

export default InputPanel
