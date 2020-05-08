import React from 'react'

const Items = ({ addToInput }) => {
  const onButtonClick = (e) => addToInput(e.target.name)

  return (
    <div>
      <div className="container-symbols">
        <div className="container">
          <button name="C" className="eraser clear" onClick={onButtonClick}>
            C
          </button>
          <button name="←" className="eraser" onClick={onButtonClick}>
            ⬅
          </button>
          <button name="/" className="symbol" onClick={onButtonClick}>
            ÷
          </button>
        </div>
        <div className="container">
          <button name="7" onClick={onButtonClick}>
            7
          </button>
          <button name="8" onClick={onButtonClick}>
            8
          </button>
          <button name="9" onClick={onButtonClick}>
            9
          </button>
          <button name="*" className="symbol" onClick={onButtonClick}>
            x
          </button>
        </div>
        <div className="container">
          <button name="4" onClick={onButtonClick}>
            4
          </button>
          <button name="5" onClick={onButtonClick}>
            5
          </button>
          <button name="6" onClick={onButtonClick}>
            6
          </button>
          <button name="-" className="symbol" onClick={onButtonClick}>
            -
          </button>
        </div>
        <div className="container">
          <button name="1" onClick={onButtonClick}>
            1
          </button>
          <button name="2" onClick={onButtonClick}>
            2
          </button>
          <button name="3" onClick={onButtonClick}>
            3
          </button>
          <button name="+" className="symbol" onClick={onButtonClick}>
            +
          </button>
        </div>
        <div className="container">
          <button name="0" className="zero" onClick={onButtonClick}>
            0
          </button>
          <button name="." onClick={onButtonClick}>
            .
          </button>
          <button name="=" className="symbol" onClick={onButtonClick}>
            =
          </button>
        </div>
      </div>
    </div>
  )
}

export default Items
