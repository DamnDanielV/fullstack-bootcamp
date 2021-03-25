import React, { useState } from 'react'

export const Counter = () => {

    const [ counter, setCounter ] = useState(0)

    const handleClick = (choice) => {
        choice ? setCounter(counter + 1) : setCounter(counter - 1)
    }

    return (
        <div>
            <h1>Contador {counter}</h1>
            <button onClick={() => {handleClick(true)}}>+</button>
            <button onClick={() => {handleClick(false)}}>-</button>
        </div>
    )
}
