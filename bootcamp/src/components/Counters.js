import React, { useState } from 'react'

export const Counters = () => {

    // const [counterLeft, setCounterLeft] = useState(0)
    // const [counterRight, setCounterRight] = useState(0)

    // const handleLeft = () => {
    //     setCounterLeft(counterLeft + 1)
    // }

    // const handleRight = () => {
    //     setCounterRight(counterRight + 1)
    // }


    // useState para los contadores
    const [counters, setCounters] = useState({
        counterLeft: 0,
        counterRight: 0,
        message: 'mensaje desde useState'
    })

    // useState para el arreglo de caracteres
    const [array, setArray] = useState([])


    // función para manejar el evento del click a la izquierda
    const handleLeft = () => {
        setCounters({
            ...counters,
            counterLeft : counters.counterLeft + 1,
        })
        setArray((preValue) => {
            return [...array, 'R']
        })
    }

    // funcikn para manejar el evento del click a la derecha
    const handleRight = () => {
        setCounters({
            ...counters,
            counterRight: counters.counterRight + 1
        })
        setArray((preValue) => {
            return [...array, 'L']
        })
    }

    //componente para renderizar un menaje en casod de que los contadores sean cero
    const Mensaje = () =>{
        return (<h1>Contador en cero</h1>)
    }
    const Array = ({array}) => {
        return <p>{array}</p>
    }
    return (
        <div>
            <h1>{counters.counterLeft}</h1>
            <button onClick={handleLeft}>left</button>
            <button onClick={handleRight}>right</button>
            <h1>{counters.counterRight}</h1>
            {/* conditional rendering */}
            {counters.counterLeft + counters.counterRight === 0 ? <Mensaje /> : <Array array={array}/>}
        </div>
    )
}
