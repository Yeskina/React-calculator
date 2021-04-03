import React, { useEffect, useState } from 'react';
import Items from './Items'
import InputPanel from './InputPanel'

const Calculator = () => {
  const [result, setResult] = useState('')
  const [isCalculated, setIsCalculated] = useState(false)

  const addToInput = (buttonName) => {

    if (buttonName === '=') {
      calculate()
    } else if (buttonName === 'C') {
      reset()
    } else if (buttonName === '←') {
      backspace()
    } else {
      setResult(result + buttonName)
    }
  }

  useEffect(() => {
    if (isCalculated === true && result === '') {
      reset()
      setIsCalculated(false)
    }
  }, [isCalculated, result])
  
console.warn(isCalculated)

  const backspace = () => {
    setResult(result.slice(0, -1))
  }

  const reset = () => {
    setResult('')
  }

  const calculate = () => {
    setResult(String(eval(result)))
    setIsCalculated(true)
  }

  return (
    <div className="main-container">
      <InputPanel result={result} />
      <Items addToInput={addToInput} />
    </div>
  )
}

export default Calculator
