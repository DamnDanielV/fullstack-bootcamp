import React from 'react'

export const Total = (props) => {
    const { data } = props
    const { exercises1, exercises2, exercises3 } = data
    return (
        <>
            <p>
                Number of exercises {exercises1 + exercises2 + exercises3}
            </p>
        </>
    )
}
